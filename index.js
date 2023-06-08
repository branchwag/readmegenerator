// TODO: Include packages needed for this application
const inquirer = require('inquirer'); 
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        name: "projectTitle",
        type: "input",
        message: "Project Title:"
    },
    {
        name: "description",
        type: "input",
        message: "Description:"
    },
    {
        name: "install",
        type: "input",
        message: "Installation Intructions:"
    },
    {
        name: "usage",
        type: "input",
        message: "Usage Information:"
    },
    {
        name: "license",
        type: "list",
        message: "License:",
        choices: ['MIT License', 'Creative Commons', 'GNU', ''], //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    },
    {
        name: "contribution",
        type: "input",
        message: "Contribution Guidelines:"
    },
    {
        name: "tests",
        type: "input",
        message: "Test Instructions:"
    },
    {
        name: "gitUsername",
        type: "input",
        message: "Github Username:"
    },
    {
        name: "email",
        type: "input",
        message: "Email Address:"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 

}

const handleAnswers = (answers) => {
    console.log(answers);
    writeToFile('README.md', generateMarkdown(answers));
}


// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions).then(handleAnswers);
}

// Function call to initialize app
init();
