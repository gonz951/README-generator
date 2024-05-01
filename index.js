// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
    
     [
        {
            name: 'name',
            message: 'What is the name of your project?',
            type: 'input'
        },
        {
            name: 'description',
            message: 'Enter a description of said project (ex. What was the purpose of it? What did you learn?)',
            type: 'input'
        },  
        {
            name: 'instructions',
            message: 'What instructions do we need to install this project?',
            type: 'input'
        },  
        {
            name: 'link',
            message: 'Can we get a link to your project?',
            type: 'input'
        },
        {
            name: 'usage',
            message: 'What other information do we need about the usage of this project?',
            type: 'input'
        }, 
        {
            name: 'license',
            message: 'Which license would you like to use?',
            type: 'list',
            choices: ['MIT', 'APACHE 2.0', 'GNU GPL','none'],
        },  
        {
            name: 'contribution',
            message: 'How can we contribute to this project?',
            type: 'input'
        },  
        {
            name: 'tests',
            message: 'How can we test this project?',
            type: 'input'
        },
        {
            name: 'user',
            message: 'What is your github username?',
            type: 'input'
        },
        {
            name: 'email',
            message: 'And your email address?',
            type: 'input'
        },
     ]
    

// TODO: Create a function to write README file
function writeToFile(data) {
    const readMeContent = generateMarkdown(data)

    fs.writeFile('./utils/README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README!')
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile(data)
    })
};

// Function call to initialize app
init();
