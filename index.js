// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { Console } = require('console');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
// // TODO: Create an array of questions for user input
// const questions = [];

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
        name: 'prjInstructions',
        message: 'Please provide instructions.',
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
        type: 'input',
        name: 'prjCredits',
        message: 'Please list your credits.',
      },
      {
        type: 'input',
        name: 'prjTests',
        message: 'Please list your projects tests.',
      },
      {
        type: 'input',
        name: 'prjQuestions',
        message: 'Please list your questions.',
      },
      {
        type: 'input',
        name: 'prjFeatures',
        message: 'Please list your features.',
      },
      {
        type: 'input',
        name: 'prjBadges',
        message: 'Please list your project Badges.',
      },
      {
        type: 'input',
        name: 'prjContributing',
        message: 'Please list your project Contributors.',
      },
        //   {
        //     type: 'input',
        //     name: 'prjLicense',
        //     message: 'Please list your license.',
        //   },
    ]);
  };
  
  const generateREADME = (answers) =>
  `[![LinkedIn][linkedin-shield]][${answers.linkedinURL}]

  # <${answers.prjTitle}>
  
  ${answers.prjLink}
  
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
  
  ${answers.prjInstructions}
  
  md ![${answers.prjImgAltTxt}](${answers.prjImgPath})
  
  ## Credits
  
  ${answers.prjCredits}

  ## License
  
  PROJECT LICENSE
  
  ## Badges
  
  ${answers.prjBadges}
  
  ## Features
  
  ${answers.prjFeatures}
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.prjTests}
  
  ## Questions
  
  ${answers.prjQuestions}
  
  
  
  
  
  
  
  
  
  
  <!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: www.linkedin.com/in/tyler-abegg`
  ;
  
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const init = () => {
    promptUser()
      .then((answers) => writeFileAsync('README-generator.md', generateREADME(answers)))
      .then(() => console.log('Successfully wrote to README.md'))
      .catch((err) => console.error(err));
  };

// Function call to initialize app
init();
