const { tableColsToFields } = require("../../utils/prepareHasuraFields");

require("dotenv").config();
module.exports = {
  prompt: async ({ prompter }) => {
    const {
      getTableCols,
      getSchemaTables,
      getGenCoreSettings,
    } = require("../../utils/hasuraTablesInfo");
    const { tableColsToObjects } = require("../../utils/resultToObjects");
    const { result: getSchemaTablesResult } = await getSchemaTables();
    const [_schemaTablesNet, ...schemaTablesNet] = getSchemaTablesResult;
    const tables = schemaTablesNet.map((tableNameInArr) => tableNameInArr[0]);
    tables.push("q");
    let { resourceName } = await prompter.prompt({
      type: "select",
      name: "resourceName",
      message: "Please Select resource or select q for writing it manually",
      choices: tables,
    });
    console.log(resourceName);
    if (resourceName === "q") {
      const answers = await prompter.prompt({
        type: "input",
        name: "resourceName",
        message: `Please enter resource name: `,
      });
      resourceName = answers.resourceName;
    }
    const { result: getTableColsResult } = await getTableCols(resourceName);

    const genCoreSetting = await getGenCoreSettings();

    // Get Predirs
    let predir = "";
    const preDirsSetting = genCoreSetting.filter(
      (setting) => setting.setting_name === "_gen_predirs"
    );
    const preDirsSettingVal =
      preDirsSetting && preDirsSetting[0]
        ? preDirsSetting[0].setting_value
        : [];
    console.log(preDirsSettingVal);
    // Check if Resource name contains predir
    if (resourceName.includes("_")) {
      const [prefix, ..._restResourceName] = resourceName.split("_");
      console.log("prefix", prefix, preDirsSetting);
      if (preDirsSettingVal && preDirsSettingVal.includes(prefix)) {
        resourceName = resourceName.replace(prefix + "_", "");
        predir = prefix + "/";
      }
    }

    const tableCols = tableColsToObjects(getTableColsResult);
    const raFields = tableColsToFields(tableCols);

    return {
      resourceName,
      raFields,
      fieldsTmpPath: "/ra-gen/new/_tmp/",
      inputsTmpPath: "/ra-gen/new/_tmp/inputs/",
      predir,
    };
  },
};
