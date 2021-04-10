// licenses MIT, APACHE, or 


// www.linkedin.com/in/tyler-abegg, https://github.com/UnDuhDuhSea, tafimba@gmail.com, /imgs/developer_meme.jpg, This project will prompt the user with questions which will populate a new README File. Please open up the terminal and write node index.js and follow the prompts to create a README File.
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');
const { Console } = require('console');

// create writeFile function using promises instead of a callback function
const writeFileAsync = util.promisify(fs.writeFile);
// // TODO: Create an array of questions for user input
// const questions = [];

// const whichLicense = function() {
//   if ()
// }

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

VIDEO LINK

## License
  
License: \n 

${answers.prjLicense}
  
## Contributing
  
Created by [${answers.githubUsername}](https://github.com/${answers.githubUsername})
  
## Tests
  
To run tests, run the following command: \n
\`npm test\` in the terminal
  
## Questions
  
Github: [${answers.githubUsername}](https://github.com/${answers.githubUsername})\n
Email: [${answers.email}](https://github.com/${answers.email})


  
  
  
  
  
  
  
  
  
<!-- MARKDOWN LINKS & IMAGES -->
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]:${answers.linkedinURL}`;
  
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


// ######### Brian Example ############
// const init = () => {
//   promptUser()
//     .then((answers) => {
//       await writeFileAsync('README-generator.md', generateREADME(answers))
//       console.log("success");
//     })
//     .then(() => console.log('Successfully wrote to README.md'))
//     .catch((err) => console.error(err));
// };




// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
