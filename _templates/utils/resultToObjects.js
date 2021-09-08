module.exports = {
  tableColsToObjects: (result) => {
    if (Array.isArray(result)) {
      const [_tableCols, ...tableCols] = result;
      const colsObjects = tableCols.map((colArr) => {
        const commentStrings =
          colArr[2] + "" === "NULL" ? [] : colArr[2].split(" ");
        const commentsArr = commentStrings.map((comment) => {
          if (!comment.includes("_gen")) return [];
          const commentRest = comment.replace("_gen_", "");
          return commentRest.split("_");
        });

        return {
          col_name: colArr[0],
          data_type: colArr[1].split(" ")[0],
          comments_arr: commentsArr,
        };
      });
      return colsObjects;
    }
  },
};
