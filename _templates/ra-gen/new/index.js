require("dotenv").config();
const { _log } = require("../../../utils/common");
const { tableColsToFields } = require("../../../utils/prepareHasuraFields");
const {
  getTableCols,
  getSchemaTables,
  getGenCoreSettings,
} = require("../../../utils/hasuraTablesInfo");
const { tableColsToObjects } = require("../../../utils/resultToObjects");

module.exports = {
  prompt: async ({ prompter }) => {
    const { result: getSchemaTablesResult } = await getSchemaTables();
    const [_schemaTablesNet, ...schemaTablesNet] = getSchemaTablesResult;
    const tables = schemaTablesNet.map((tableNameInArr) => tableNameInArr[0]);
    const tablesNames = [...tables];
    console.log(tables);
    let { resourceName } = await prompter.prompt({
      type: "select",
      name: "resourceName",
      message: "Please Select resource or select q for writing it manually",
      choices: tables,
    });

    _log(resourceName);
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
    const raFields = tableColsToFields(tableCols, tablesNames);

    return {
      resourceName,
      raFields,
      fieldsTmpPath: "/ra-gen/new/_tmp/",
      inputsTmpPath: "/ra-gen/new/_tmp/inputs/",
      predir,
    };
  },
};
