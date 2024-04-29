// TODO: Include packages needed for this application
const inquirer = require('inquirer');

const { writeFile } = require('fs').promises;

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
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
            choices: [''],
            // ! FIGURE OUT CHOICES LATER
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
     ]);
};

// TODO: Create a function to write README file
const writeREADME = ({ name, description, instructions, link, usage, contribution, tests, user, email }) => `
# ${name}

// BADGE SHOULD BE HERE !!

## Description

${description}

## Table of Contents 

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contribute](#how to contribute)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${instructions}${link}

## Usage

${usage}

To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:

    '''md
    ![alt text](assets/images/screenshot.png)
    '''

## License

The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).

## How to Contribute

${contribution}

## Tests

${tests}

## Questions

If you have any questions, please contact me through either:
My GitHub: https://github.com/${user}
Or email: ${email}
`

// TODO: Create a function to initialize app
const init = () => {
    questions()

    .then((answers) => writeFile('README.md', writeREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

// Function call to initialize app
init();
