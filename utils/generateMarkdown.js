// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![${license} license](${renderLicenseLink(license)})`;
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/license-${license}-blue`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let licenseText;
  switch (license) {
    case "MIT":
      licenseText = "The MIT License";
      break;
    case "BSD3":
      licenseText = 'BSD 3-Clause "New" or "Revised" license'
      break;
    default:
      licenseText = "";
      break;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
