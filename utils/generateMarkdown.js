// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = []
  if (license = 'MIT') {
    badge = '![Static Badge](https://img.shields.io/badge/MIT-License-green)'
    return badge;
  } else if (license = 'APACHE 2.0') {
    badge = '![Static Badge](https://img.shields.io/badge/APACHE%202.0-License-red)'
    return badge;
  } else if (license = 'none') {
    badge = ''
    return badge;
  }
}
// renderLicenseBadge()
//console.log(license)
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink = []
  if (license = 'MIT') {
    licenseLink = 'https://choosealicense.com/licenses/mit/'
    return licenseLink;
  } else if (license = 'APACHE 2.0') {
    licenseLink = 'https://choosealicense.com/licenses/apache-2.0/'
    return licenseLink;
  } else if (license = 'none') {
    licenseLink = ''
    return licenseLink;
  };
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let section = []
  if (license = 'MIT') {
    section = `MIT License

    Copyright (c) [year] [fullname]
    
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.`
    return section;
  } else if (license = 'APACHE 2.0') {
    section = ''
    // ! LICENSE TOO LONG FOR TESTING, ADD LATER
    return section;
  } else if (license = 'none') {
    section = ''
    return section;
  };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  renderLicenseBadge()
  renderLicenseLink()
  renderLicenseSection()
  return `# ${data.name}

${data.badge}

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

${data.licenseLink}
${data.section}

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
