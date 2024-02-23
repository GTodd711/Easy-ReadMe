// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache 2.0':
      return  `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;

    case 'Boost':
      return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;

    case 'BSD 3-Clause':
      return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;

    case 'EPL 1.0':
      return  `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;

    case 'GNU GPLv3':
      return  `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;

    case 'GNU GPL v2':
      return  `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
      
    case 'IPL 1.0':
      return   `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
      break;

    case 'ISC':
      return  `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
      break;

    case 'MIT':
      return  `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;

    case 'Unlicense':
      return ``;
      break;

      // default:
      //   return ''
      //   break;

}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {
    case 'Apache 2.0':
      return `https://opensource.org/licenses/Apache-2.0`;
      break;
        
    case 'Boost':
      return `https://www.boost.org/LICENSE_1_0.txt`;
      break;

    case 'BSD 3-Clause':
      return `https://opensource.org/licenses/BSD-3-Clause`;
      break;

    case 'EPL 1.0':
      return `https://opensource.org/licenses/EPL-1.0`;
      break;

    case 'GNU GPLv3':
      return `https://www.gnu.org/licenses/gpl-3.0`;
      break;

    case 'GNU GPL v2':
      return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
      break;
      
    case 'IPL 1.0':
      return `https://opensource.org/licenses/IPL-1.0`;
      break;

    case 'ISC':
      return `https://opensource.org/licenses/ISC`;
      break;

    case 'MIT':
      return `https://opensource.org/licenses/MIT`;
      break;

    case 'Unlicense':
      return`http://unlicense.org/`;
      break;
 }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  if (license) {
    return `## license
This project is licensed under ${license}.
`;
}else{
  return '';
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
` + renderLicenseBadge(data.license) +
`
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Description
${data.description}

## Download
${data.download}

## Usage
${data.usage}

## Testing
${data.testing}

## Questions & Contributions
${data['questions & contributions']}

` + renderLicenseSection(data.license)
 + renderLicenseLink(data.license)
}

module.exports = generateMarkdown;