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
        name: "Description",
        type: "input",
        message: "Table of Contents:"
    },
    {
        name: "Installation",
        type: "input",
        message: "Installation Intructions:"
    },
    {
        name: "Usage",
        type: "input",
        message: "Usage Information:"
    },
    {
        name: "License",
        type: "list",
        message: "Usage Information:",
        choices: ['MIT License', 'Creative Commons', 'GNU'], //https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
    },
    {
        name: "Contribution",
        type: "input",
        message: "Contribution Guidelines:"
    },
    {
        name: "Tests",
        type: "input",
        message: "Test Instructions:"
    },
    {
        name: "GitUsername",
        type: "input",
        message: "Github Username:"
    },
    {
        name: "EmailAddress",
        type: "input",
        message: "Email Address:"
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
//how is fileName and data getting declared just by writing them as params here?
//are we supposed to call fs within the writetofile function?
//
    // fs.writeFile(fileName, data, (err)) {
    // }

    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
      }); 
        // GIVEN a command-line application that accepts user input
        // WHEN I am prompted for information about my application repository
        // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
        // WHEN I enter my project title
        // THEN this is displayed as the title of the README
        // WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
        // THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
        // WHEN I choose a license for my application from a list of options
        // THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
        // WHEN I enter my GitHub username
        // THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
        // WHEN I enter my email address
        // THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
        // WHEN I click on the links in the Table of Contents
        // THEN I am taken to the corresponding section of the README
    //}

}

const handleAnswers = (answers) => {
    console.log(answers);
    writeToFile('README.md', JSON.stringify(answers));
}
    //fs.writeFile(fileName, data); // no error but doesn't seem to create a file? 
    generateMarkdown()
//  }

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions).then(handleAnswers);
  //writeToFile(README.md, answers) //how do we pass it the question answers though and not just questions themselves? 

}

// Function call to initialize app
init();
