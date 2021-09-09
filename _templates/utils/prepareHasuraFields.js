const postgresToFieldTypesMap = {
  uuid: null,
  created_at: null,
  updated_at: null,
  deleted_at: null,
  integer: "number",
  numberic: "number",
  text: "text",
};

module.exports = {
  /**
   * @param {TableCol[]} tableCols
   * @return {RaField[]}
   */
  tableColsToFields: (tableCols) => {
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
      // else do your work
      raFields.push({
        tmp_name: postgresToFieldTypesMap[col.data_type],
        source: col.col_name,
      });
    });

    return raFields;
  },
};
