import axios from "axios";

export default {
  async afterUpdate(event) {
    console.log(Object.keys(event));
    const { data } = event.params;
    const BUILDER_FIELD = "BuildAutomatically";
    const builderState = data[BUILDER_FIELD];
    const buildUrl = process.env.FRONTEND_BUILD_URL;
    const buildToken = process.env.FRONTEND_BUILD_SECRET;

    console.log("🚀 : afterUpdate ~ data", data)

    await strapi.documents("api::activity.activity").create({
      data: {
        site: "common",
        by: process.env.SYSTEM_EMAIL,
        message: builderState
          ? "Site builder is turned on"
          : "Site builder is turned off",
      },
    });
    if (builderState) {
      await axios.post(buildUrl, {
        builder: true
      }, {
      headers: {
        'Authorization': `Bearer ${buildToken}`
      }
    });
    }
  },
};