// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
// const questions = [];
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'input',
            message: 'What is your project name?',
            name: 'project'
        },
        {
            type: 'input',
            message: 'Please write a short description.',
            name: 'description'
        },
        {
            type: 'list',
            message: 'What kinds of license should your project have?',
            choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
            name: 'license'
        },
        {
            type: 'input',
            message: 'What command should be run to install dependencies?',
            default: 'npm i',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What command should be run to run test?',
            default: 'npm test',
            name: 'test',
        },
        {
            type: 'input',
            message: 'What does the user need to know about using this repo?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing'
        }
    ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
