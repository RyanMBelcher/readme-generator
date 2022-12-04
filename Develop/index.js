// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             message: 'What is your GitHub username?',
//             name: 'username',
//             validate: nameInput => {
//                 if (nameInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your username!');
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: 'What is your email address?',
//             name: 'email',
//             validate: emailInput => {
//                 if (emailInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter your email!');
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: 'What is your project name?',
//             name: 'project',
//             validate: projectInput => {
//                 if (projectInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a project name!');
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: 'Please write a short description.',
//             name: 'description',
//             validate: descriptionInput => {
//                 if (descriptionInput) {
//                     return true;
//                 } else {
//                     console.log('Please enter a description');
//                 }
//             }
//         },
//         {
//             type: 'list',
//             message: 'What kinds of license should your project have?',
//             choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'None'],
//             name: 'license'
//         },
//         {
//             type: 'input',
//             message: 'What command should be run to install dependencies?',
//             default: 'npm i',
//             name: 'installation'
//         },
//         {
//             type: 'input',
//             message: 'What command should be run to run test?',
//             default: 'npm test',
//             name: 'test',
//         },
//         {
//             type: 'input',
//             message: 'What does the user need to know about using this repo?',
//             name: 'usage',
//             validate: usageInput => {
//                 if (usageInput) {
//                     return true;
//                 } else {
//                     console.log('Please tell the user what they need to know about this repo!')
//                 }
//             }
//         },
//         {
//             type: 'input',
//             message: 'What does the user need to know about contributing to the repo?',
//             name: 'contributing',
//             validate: contributeInput => {
//                 if (contributeInput) {
//                     return true;
//                 } else {
//                     console.log('Please tell the user what they need to know about contributing!')
//                 }
//             }
//         }
//     ])
//     .then((response) => {
//         let readmeFile = generateMarkdown(response);
//         fs.writeFile('README.md', readmeFile, (err) =>
//             err ? console.error(err) : console.log('File created!')
//         )
//     });


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter your username!');
            }
        }
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter your email!');
            }
        }
    },
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'project',
        validate: projectInput => {
            if (projectInput) {
                return true;
            } else {
                console.log('Please enter a project name!');
            }
        }
    },
    {
        type: 'input',
        message: 'Please write a short description.',
        name: 'description',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description');
            }
        }
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
        name: 'usage',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please tell the user what they need to know about this repo!')
            }
        }
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributing',
        validate: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log('Please tell the user what they need to know about contributing!')
            }
        }
    }
];


// // TODO: Create a function to write README file
function writeFile(response) {
    let readmeFile = generateMarkdown(response)
    fs.writeFile('README.md', readmeFile, (err) =>
        err ? console.error(err) : console.log('File created!')
    );
}


// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(
            (response) => {
                writeFile(response);
            }
        );

};

// Function call to initialize app
init();
