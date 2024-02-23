// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
// Table of Contents
const questions = [
    {
        type: 'input',
        name: 'title',
        message: " What's the title of your project? ",
    },
    {
        type: 'input',
        name: 'description',
        message: " How would you best describe your project? ",
    },
    {
        type: 'input',
        name: 'download',
        message: " Is your application available for download? ",
    },
    {
        type: 'input',
        name: 'usage',
        message: " How would you guide someone through your project? ",
    },
    {
        type: 'input',
        name: 'testing',
        message: " Is the Project able to be tested? ",
    },
    {
        type: 'input',
        name: 'questions & contributions',
        message: " How do you want potential contributors to be able to ask questions about the application? ",
    },
    {
        type: 'list',
        name: 'license',
        choices: ['Apache 2.0', 'Boost', 'BSD 3-Clause', 'EPL 1.0', 'GNU GPLv3', 
        'GNU GPL v2', 'IPL 1.0', 'ISC', 'MIT', 'Unlicense' ],
    },
];

// TODO: Create a function to write README file
function writeToFile(data) {
    const filetitle = data.title;
    const markdownFile = generateMarkdown(data);

    fs.writeFile( filetitle + `.md`, markdownFile, (err) =>
        err ? console.log(err) : console.log('Success!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {       
            writeToFile(data);
        })
}


// Function call to initialize app
init();
