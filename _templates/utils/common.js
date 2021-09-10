module.exports = {
  _log: (data, level = "INFO") => {
    if (level === "INFO") console.log("\x1b[42m", data, "\x1b[0m");
    else console.log(data);
  },
};
