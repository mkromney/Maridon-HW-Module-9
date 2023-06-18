// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// Readme Details 
const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

const licenseChoices = ["MIT", "AGNU GPLv3", "Apache", "Rust", "None"];

// License Badges List from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
const licenseBadges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "AGNU GPLv3": "[![License: AGNU GPLv3](https://img.shields.io/badge/License-AGNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  Apache: "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  Rust: "[![License: Rust](https://img.shields.io/badge/License-MIT%2FApache--2.0-blue.svg)](https://www.rust-lang.org/policies/licenses)",
  None: ""
};

const licenseTexts = {
  MIT: "MIT License text goes here.",
  "AGNU GPLv3": "AGNU GPLv3 License text goes here.",
  Apache: "Apache License text goes here.",
  Rust: "Rust License text goes here.",
  None: "No license selected."
};

// The following lines create an array of questions for user input. //
inquirer
  .prompt([
    {
      // Title
      type: 'input',
      name: 'title',
      message: 'Project Title?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Description
      type: 'input',
      name: 'description',
      message: 'Describe the Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Installation
      type: 'input',
      name: 'installation',
      message: 'Describe how to Install your Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Usage
      type: 'input',
      name: 'usage',
      message: 'Describe how your Project will be used.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // License Question
      type: "list",
      name: "license",
      message: "Which of these Licenses is applicable to your Project?",
      choices: licenseChoices
    },
    {
      // Contributing
      type: 'input',
      name: 'contributing',
      message: 'What are the Requirements for making Contributions?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Tests
      type: 'input',
      name: 'tests',
      message: 'Describe how to Test your Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Questions. GitHub username
      type: 'input',
      name: 'username',
      message: 'What is your GitHub Username?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Email contact in Questions section
      type: 'input',
      name: 'email',
      message: 'What is your email addess?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    
  ])

  // This sections creates const variables for the responses and then console logs them. //
  .then(answers => {
    
    // Project Title Answer //
    const projectTitle = answers.title;
    console.log('Project Title:', projectTitle);

    // Description Answer //
    const projectDescription = answers.description;
    console.log('Project Description:', projectDescription);
    
    // Installation Instructions Answer //
    const installationInstructions = answers.installation;
    console.log('Installation Instructions:', installationInstructions);

    // Project Use Answer //
    const projectUsage = answers.usage;
    console.log('Project Usage:', projectUsage);

    //Licenses
    const selectedLicense = answers.license;
    const selectedLicenseBadge = licenseBadges[selectedLicense];
    const selectedLicenseText = licenseTexts[selectedLicense];
    console.log("Selected License:", selectedLicense);
    console.log("License Badge:", selectedLicenseBadge);
    console.log("License Text:", selectedLicenseText);

    // How to Contribute Answer //
    const contributionRequirements = answers.contributing;
    console.log('Contribution Requirements:', contributionRequirements);

    // How to Test Answer //
    const howtoTest = answers.tests;
    console.log('How to Test this Project:', howtoTest);

    //GitHub
    const githubUsername = answers.username;
    const githubLink = `https://github.com/${githubUsername}`;
    console.log('GitHub Username:', githubUsername);
    console.log('GitHub Link:', githubLink);

    // Email Address Answer //
    const yourEmail = answers.email;
    console.log('Your email:', yourEmail);
    
    
    const createdBy = `Created by ${answers.username} on ${currentDate}.`;

      // Generate README content    
  const readmeContent = `
  # ${answers.title} 
  <small>${createdBy}</small>
  
  ## Description
  ${answers.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#username)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ## License
  ${answers.license}
  ${selectedLicenseBadge}
  ${selectedLicenseText}

  ## Contributing
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}

  ## Questions
  - GitHub: [${answers.username}](${githubLink})
  - Email: [${answers.email}](mailto:${answers.email})

  `;
  
    // Write the README file
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error('Error occurred while creating README:', err);
      } else {
        console.log('README.md file successfully created!');
      }
    });

  })

  .catch(error => {
    console.error("Error occurred:", error);
  });



//Sources: https://codesandbox.io/s/github/samueltuki/readMe-Generator/tree/main/?file=/index.js:82-173
// and https://www.youtube.com/watch?v=OT63ATGrs5I