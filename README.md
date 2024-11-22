# 🚀 Getting Started with Strapi Template

Custom Strapi template for websites, developed to share common website building logic and data structures.

## Start a New App Based on the Template

Start your Strapi application with this template:

```sh
npx create-strapi-app@latest project-name --template https://github.com/ITSUA-team/strapi-template-website --template-branch=master
```

[Learn more](https://docs.strapi.io/dev-docs/cli#strapi-develop) about how to use Strapi templates.

## Upgrade

It's always a good idea to pull the latest Strapi dependencies:

```sh
npx @strapi/upgrade latest
# or
npx @strapi/upgrade minor # without major upgrade
```

## Data Structures

- **Redirects**: Site redirects managed in Strapi and handled with Nginx.
- **Dockerfiles**: Dockerfiles for development and production added.
- **Pages, Articles**: Common fields and SEO.
- **Activity Logs**: Track activities within the application.
- **Builder**: Features to build remote frontend.
- **Components**: Building blocks for constructing sites.