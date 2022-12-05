// This is  a function that returns a license badge based on which license is passed in
// If there is no license, it returns an empty string
function renderLicenseBadge(license) {
  if (license) {
    return `![license](https://img.shields.io/badge/License-${license}-brightgreen)`;
  } else {
    return '';
  }
}

// This is  a function that returns the license link
// If there is no license, it returns an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return `${license}: https://choosealicense.com/licenses/mit/`;
    case 'APACHE 2.0':
      return `${license}: https://www.apache.org/licenses/`;
    case 'GPL 3.0':
      return `${license}: https://choosealicense.com/licenses/gpl-3.0/`;
    case 'BSD 3.0':
      return `${license}: https://www.openbsd.org/policy.html`;
    case 'None':
      return '';
  }
}

// This is  a function that returns the license section of README
// If there is no license, it returns an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return 'This application uses the MIT license.';
    case 'APACHE 2.0':
      return 'This application uses the APACHE 2.0 license.';
    case 'GPL 3.0':
      return 'This application uses the GPL 3.0 license.';
    case 'BSD 3.0':
      return 'This application uses the BSD 3.0 license.';
    case 'None':
      return '';
  }
}

// This is  a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ${renderLicenseBadge(data.license)}

  # ${data.project}
 

  ## Description
  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation 
  To install necessary dependencies, run the following command:
  \n${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}
  \n${renderLicenseLink(data.license)}

  ## Contributing
  ${data.contributing}

  ## Questions
  If you have any questions about the repo, open an issue or 
  contact me directly at ${data.email}. You can find more of my work at 
  https://github.com/${data.username}.

  ## Tests
  To run tests, run the following command:
  \n${data.test}
`;
}

module.exports = generateMarkdown;
