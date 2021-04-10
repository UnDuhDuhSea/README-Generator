// licenses MIT, APACHE, or 


// www.linkedin.com/in/tyler-abegg, https://github.com/UnDuhDuhSea, tafimba@gmail.com, /imgs/developer_meme.jpg, This project will prompt the user with questions which will populate a new README File. Please open up the terminal and write node index.js and follow the prompts to create a README File.
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const { Console } = require('console');

const writeFileAsync = util.promisify(fs.writeFile);

console.log('Please follow the prompts to populate your README file!');
const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'linkedinURL',
        message: 'Linkedin URL',
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Github Username',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter Email',
      },
      {
        type: 'input',
        name: 'prjTitle',
        message: 'Project Title',
      },
      {
        type: 'input',
        name: 'prjLink',
        message: 'Project Link',
      },
      {
        type: 'input',
        name: 'prjDiscription',
        message: 'Please write out a project Description.',
      },
      {
        type: 'input',
        name: 'prjInstallation',
        message: 'Please provide the steps required to install your project.',
      },
      {
        type: 'input',
        name: 'prjImgPath',
        message: 'Please provide the project image path.',
      },
      {
        type: 'input',
        name: 'prjImgAltTxt',
        message: 'Please provide the alt text for your image.',
      },
      {
        type: 'list',
        message: 'Please pick a license',
        choices: ['MIT', 'APACHE', 'BSD3'],
        name: 'prjLicense',
      },
    ]);
  };
  
const generateREADME = (answers) =>
`[![LinkedIn][linkedin-shield]][linkedin-url] \n
![license](https://img.shields.io/badge/license-${answers.prjLicense}-blue)

# ${answers.prjTitle}
  
${answers.prjLink}

![${answers.prjImgAltTxt}](${answers.prjImgPath})

## Description
  
${answers.prjDiscription}
  
## Table of Contents
  
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
  
## Installation
  
${answers.prjInstallation}
  
## Usage

Run \`node index.js\` in the terminal and follow the prompts to create a README.md file. \n

Below is a video to follow for reference: \n

https://youtu.be/7kvN-8wHdvA

## License
  
License: \n 

${answers.prjLicense}
  
## Contributing
  
Created by [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  
## Tests
  
To run tests, run the following command: \n
\`npm test\` in the terminal
  
## Questions

Please feel free to send me an email or reach out on github! \n
Github: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n
Email: [${answers.email}](https://github.com/${answers.email})


  
  
  
  
  
  
  
  
  
<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:${answers.linkedinURL}`;
  

function writeToFile(fileName, data) {}

const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('README-generator.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err));
};

init();



