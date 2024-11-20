import path from "node:path";
import fse from "fs-extra";
import { errors } from "@strapi/utils";
const execa = require("execa");

const REDIRECTS_PATH = process.env.REDIRECTS_PATH || '/etc/nginx/redirects';
const { ApplicationError } = errors;

export default {
  async afterDeleteMany(event) {
    await changeRedirects(event);
  },

  async afterUpdate(event) {
    await changeRedirects(event);
  },

  async afterDelete(event) {
    await changeRedirects(event);
  }
};

async function changeRedirects(event) {
  console.log("🚀 ~ changeRedirects ~ event", Object.keys(event));
  const { result, action, params  } = event;
  
  if (result?.publishedAt) {
    try {

      console.log("🚀 ~ changeRedirects ~ result?.publishedAt", result?.publishedAt);
      const allRedirects = await strapi.documents("api::sites-redirect.sites-redirect").findMany({
        populate: "redirects",
      });
      console.log("🚀 ~ changeRedirects ~ allRedirects", allRedirects);

      // create separate folder for backups
      const BACKUP_PATH = path.join(REDIRECTS_PATH, 'backups');

      // Ensure the backup and empty
      await fse.emptyDir(BACKUP_PATH);
      console.log('Backup folder inited:', BACKUP_PATH);

      // Ensure the backup and empty
      await fse.emptyDir(BACKUP_PATH);
      console.log('Backup folder inited:', BACKUP_PATH);

     // start async loop for all redirects
      for (const redirect of allRedirects) {
        const { domain, redirects } = redirect;
        console.log("🚀 ~ changeRedirects ~ domain", domain);
        console.log("🚀 ~ changeRedirects ~ redirects", redirects);

        const REDIRECTS_FILE = path.join(REDIRECTS_PATH, `${domain}_nginx_redirects.conf`);
        const BACKUP_FILE = path.join(REDIRECTS_PATH, 'backups', `${domain}_nginx_redirects.conf`);

        // Make a backup of the current redirects file if exists
        const isRedirectFileExists = await fse.pathExists(REDIRECTS_FILE);
        if (isRedirectFileExists) {
          await fse.copy(REDIRECTS_FILE, BACKUP_FILE);
          console.log('Backup created:', BACKUP_FILE);
        }

        // Delete the current redirects file
        if (isRedirectFileExists) {
          await fse.remove(REDIRECTS_FILE);
          console.log('Redirects file removed:', REDIRECTS_FILE);
        }

        // Generate a new redirects file
        const lines = redirects.map(r => `rewrite ^${r.from}$ ${r.to} permanent;`);
        await fse.outputFile(REDIRECTS_FILE, lines.join('\n'), 'utf8');
        console.log('Redirects file created:', REDIRECTS_FILE);
      }

      // Check the nginx configuration
      // Dynamically import and use execa
      const execTest = await execa('sudo', ['nginx', '-t']);
      console.log('Nginx configuration checked:', execTest.stdout);

      // Reload the nginx service
      execa('sudo', ['systemctl', 'restart', 'nginx']);

      console.log('Nginx service reloaded');

    } catch (error) {
      console.log('Error:', error);
      // restore backup - copy all files from backup folder to REDIRECTS_PATH
      const BACKUP_PATH = path.join(REDIRECTS_PATH, 'backups');
      const files = await fse.readdir(BACKUP_PATH);
      for (const file of files) {
        await fse.copy(path
          .join(BACKUP_PATH, file), path.join(REDIRECTS_PATH, file));
        console.log('Backup restored:', path.join(REDIRECTS_PATH, file));
      }
      throw new ApplicationError(`Error: ${error}`);
    }
  }
}