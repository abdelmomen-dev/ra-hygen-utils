const { _log } = require("./common");

const postgresToFieldTypesMap = {
  uuid: "reference",
  integer: "number",
  numberic: "number",
  text: "text",
};

module.exports = {
  /**
   * @param {TableCol[]} tableCols
   * @return {RaField[]}
   */
  tableColsToFields: (tableCols, tablesNames) => {
    const ignoreColNames = ["created_at", "updated_at", "deleted_at"];
    /**@type {RaField[]} */
    const raFields = [];
    tableCols.forEach((col) => {
      // check if not ignore col name
      if (ignoreColNames.includes(col.col_name)) return;
      // check if not ignore comment
      if (col.comments_arr[0] && col.comments_arr[0].includes("ignore")) return;
      // check if data_type supported
      if (!postgresToFieldTypesMap[col.data_type]) return;
      // check if uuid and name has underscore
      if ((col.data_type === "uuid", col.col_name.includes("_id"))) {
        // get the original table name with the prefix
        const strReference = col.col_name.replace("_id", "");
        console.log(tablesNames);
        const refFound = tablesNames.filter((table) =>
          table.includes(strReference)
        );
        const reference = refFound ? refFound[0] : strReference;
        raFields.push({
          tmp_name: postgresToFieldTypesMap[col.data_type],
          source: col.col_name,
          reference,
          label: strReference,
        });
      } else if (col.col_name === "id") {
        // igonre uuid id
        return;
      } else {
        raFields.push({
          tmp_name: postgresToFieldTypesMap[col.data_type],
          source: col.col_name,
        });
      }
    });

    return raFields;
  },
};
