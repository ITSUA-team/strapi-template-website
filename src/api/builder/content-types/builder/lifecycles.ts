function buildSiteWithContent() {
  console.log("🚀 ~ buildSiteWithContent ~ Building site with content");
}

export default {
  async afterUpdate(event) {
    console.log(Object.keys(event));
    const { data } = event.params;
    const BUILDER_FIELD = "BuildAutomatically";
    const builderState = data[BUILDER_FIELD];

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
      buildSiteWithContent();
    }
  },
};