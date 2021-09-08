require("dotenv").config();
module.exports = {
  prompt: async ({ prompter }) => {
    const {
      getTableCols: getTableFields,
      getSchemaTables,
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
    const { result: getTableColsResult } = await getTableFields(resourceName);

    const tableCols = tableColsToObjects(getTableColsResult);
    console.log(tableCols);
    /*
    const answers = await prompter.prompt({
      type: "input",
      name: "resourceNameConfirm",
      message: `Please type your email [${resourceName}] again:`,
    });
    */
    return {
      resourceName,
      tableCols,
      fieldsTmpPath: "/list-generator/new/_tmp/",
    };
  },
};
