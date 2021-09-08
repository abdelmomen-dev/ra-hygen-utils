require("dotenv").config();
module.exports = {
  prompt: async ({ prompter }) => {
    const {
      getTableFields,
      getSchemaTables,
    } = require("../../utils/hasuraTablesInfo");
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
    const { result: getTableFieldsResult } = await getTableFields(resourceName);
    console.log(getTableFieldsResult, resourceName);
    const [_tableCols, ...tableCols] = getTableFieldsResult;
    /*
    const answers = await prompter.prompt({
      type: "input",
      name: "resourceNameConfirm",
      message: `Please type your email [${resourceName}] again:`,
    });
    */
    return { resourceName, tableCols };
  },
};
