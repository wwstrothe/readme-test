// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    message: "What is the title of your project? (required)",
    type: "input",
    name: "title",
    validate: titleInput => {
      if (titleInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    message: "Enter a brief description of the project. (required)",
    type: "input",
    name: "description",
    validate: descriptionInput => {
      if (descriptionInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    message: "What type of licenses, if any, is this project using?",
    type: "list",
    name: "license",
    choices: ["MIT", "Apache 2.0", "GNU V3", "Mozilla 2.0", "None"],
  },
  {
    message:
      "Please list any required packages for installation of your project",
    type: "input",
    name: "installation",
  },
  {
    message: "How will the project be used? (required)",
    type: "input",
    name: "usage",
    validate: usageInput => {
      if (usageInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    message: "Who contributed to this project",
    type: "input",
    name: "contributors",
  },
  {
    message: "Provide any applicable test information for your project.",
    type: "input",
    name: "tests",
  },
  {
    message: "Enter the GitHub URL to your project. (required)",
    type: "input",
    name: "repo",
    validate: repoInput => {
      if (repoInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    message: "Enter your GitHub username. (required)",
    type: "input",
    name: "github",
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    message: "Please provide an email address for others to reach you with questions. (required)",
    type: "input",
    name: "email",
    validate: emailInput => {
      if (emailInput) {
        return true;
      } else {
        return false;
      }
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
