module.exports = {
  prompt: async ({ prompter, inquirer }) => {
    const sleep = (milliseconds) => {
      return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };
    await sleep(300);

    /*
    return inquirer.prompt.run()
      .then(answer => console.log('Answer:', answer))
      .catch(console.error);
      */
    const questions = [
      {
        type: "select",
        name: "category",
        message: "Which Atomic design level?",
        choices: ["atoms", "molecules", "organisms", "templates", "pages"],
      },
      {
        type: "input",
        name: "component_name",
        message: "What is the component name?",
      },
      {
        type: "input",
        name: "email",
        message: "Where is the directory(Optional)",
      },
    ];
    /*
    return inquirer
      .prompt(questions)
      .then(answers => {
        const { category, component_name, dir } = answers
        const path = `${category}/${ dir ? `${dir}/` : `` }${component_name}`
        const absPath = `src/components/${path}`
        return { ...answers, path, absPath, category }
      })
    */
    return prompter.prompt(questions).then((all) => {
      return prompter.prompt({
        type: "input",
        name: "emailConfirmation",
        message: `Please type your email [${all.email}] again:`,
      });
    });
  },
};
