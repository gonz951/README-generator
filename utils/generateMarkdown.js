

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}

  // BADGE SHOULD BE HERE !!

  ## Description
  
  ${data.description}
  
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
  
  ${data.instructions}${data.link}
  
  ## Usage
  
  ${data.usage}
  
  To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
  
      '''md
      ![alt text](assets/images/screenshot.png)
      '''
  
  ## License
  
  The last section of a high-quality README file is the license. This lets other developers know what they can and cannot do with your project. If you need help choosing a license, refer to [https://choosealicense.com/](https://choosealicense.com/).
  
  ## How to Contribute
  
  ${data.contribution}
  
  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  If you have any questions, please contact me through either:
  My GitHub: https://github.com/${data.user}
  Or email: ${data.email}
`;
}

module.exports = generateMarkdown;
