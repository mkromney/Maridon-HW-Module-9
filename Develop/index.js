// The package needed for the assignment is here, in a const variable (Inquirer) // 
const inquirer = require("inquirer");
const fs = require("fs");

// Readme Date variable, pulls current date of Readme Generation. //
const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

// Stores the License selections. //
const licenseChoices = ["MIT", "AGNU GPLv3", "Apache", "None"];

// License Badges List from: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba //
const licenseBadges = {
  MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  "AGNU GPLv3": "[![License: AGNU GPLv3](https://img.shields.io/badge/License-AGNU%20GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  Apache: "[![License: Apache](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  None: ""
};

// Text that will show up when a License is selected. //
const licenseTexts = {
  MIT: "Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.",
  "AGNU GPLv3": "AGNU GPLv3 License text goes here.",
  Apache: "Licensed under the Apache License, Version 2.0 (the License); you may not use this file except in compliance with the License. You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0 Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an AS IS BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.",
  "AGNU GPLv3": "Basic Permissions: All rights granted under this License are granted for the term of copyright on the Program, and are irrevocable provided the stated conditions are met. This License explicitly affirms your unlimited permission to run the unmodified Program. The output from running a covered work is covered by this License only if the output, given its content, constitutes a covered work. This License acknowledges your rights of fair use or other equivalent, as provided by copyright law. You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force. You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright. Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you. Conveying under any other circumstances is permitted solely under the conditions stated below. Sublicensing is not allowed; section 10 makes it unnecessary.",
  None: "No license selected."
};

// The following lines create an array of questions for user input. These are modelled after the .prompt code syntax within Inquirer. Includes a validate prompt that requests an answer when the user does not give one. //
inquirer
  .prompt([
    {
      // Title //
      type: 'input',
      name: 'title',
      message: 'Project Title?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Description //
      type: 'input',
      name: 'description',
      message: 'Describe the Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Installation //
      type: 'input',
      name: 'installation',
      message: 'Describe how to Install your Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Usage //
      type: 'input',
      name: 'usage',
      message: 'Describe how your Project will be used.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // License Question, this list is stored above in the licenses const var licenseChoices. //
      type: "list",
      name: "license",
      message: "Which of these Licenses is applicable to your Project?",
      choices: licenseChoices
    },
    {
      // Contributing //
      type: 'input',
      name: 'contributing',
      message: 'What are the Requirements for making Contributions?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Tests //
      type: 'input',
      name: 'tests',
      message: 'Describe how to Test your Project.',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Questions. GitHub Username //
      type: 'input',
      name: 'username',
      message: 'What is your GitHub Username?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    {
      // Email contact in Questions section. //
      type: 'input',
      name: 'email',
      message: 'What is your email addess?',
      validate: (answer) =>
          answer === "" ? "Please give an answer." : true,
    },
    
  ])

  // This sections creates const variables for the responses and then console logs them. //
  .then(answers => {
    
    // Project Title Answer Section //
    const projectTitle = answers.title;
    console.log('Project Title:', projectTitle);

    // Description Answer Section //
    const projectDescription = answers.description;
    console.log('Project Description:', projectDescription);
    
    // Installation Instructions Answer Section //
    const installationInstructions = answers.installation;
    console.log('Installation Instructions:', installationInstructions);

    // Project Use Answer Section //
    const projectUsage = answers.usage;
    console.log('Project Usage:', projectUsage);

    //Licenses Section //
    const selectedLicense = answers.license;
    const selectedLicenseBadge = licenseBadges[selectedLicense];
    const selectedLicenseText = licenseTexts[selectedLicense];
    console.log("Selected License:", selectedLicense);
    console.log("License Badge:", selectedLicenseBadge);
    console.log("License Text:", selectedLicenseText);

    // How to Contribute Answer Section//
    const contributionRequirements = answers.contributing;
    console.log('Contribution Requirements:', contributionRequirements);

    // How to Test Answer Section//
    const howtoTest = answers.tests;
    console.log('How to Test this Project:', howtoTest);

    //GitHub Display Section //
    const githubUsername = answers.username;
    const githubLink = `https://github.com/${githubUsername}`;
    console.log('GitHub Username:', githubUsername);
    console.log('GitHub Link:', githubLink);

    // Email Address Answer //
    const yourEmail = answers.email;
    console.log('Your email:', yourEmail);
    
    
    const createdBy = `Copyright [${answers.username}](${githubLink}) on ${currentDate} see [License](#license) below.`;

      // Generates README content using the the responses given to the above prompts. ${} allows the insertion of input content. <a> </a> anchor makes sure the reader starts at the top of the README document when viewing. //    
  const readmeContent = `
  <a id="README"></a> 
  # ${answers.title} 
  <small>${createdBy}</small>\n
  ${selectedLicenseBadge}
  
  ## Description
  ${answers.description}

  ## Table of Contents
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contribution Guidelines](#contribution)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  ${answers.installation}
  
  ## Usage
  ${answers.usage}

  ## License
  ${selectedLicenseText}

  ## Contribution Guidelines
  ${answers.contributing}
  
  ## Tests
  ${answers.tests}

  ## Questions
  <small>For additional questions or comments regarding this README.md please reach me here:</small>\n
  - GitHub: [${answers.username}](${githubLink})
  - Email: [${answers.email}](mailto:${answers.email})

  `;
  
    // Prints the information from above stored in the readmeContent and writes the README.md file. //
    fs.writeFile('README.md', readmeContent, err => {
      if (err) {
        console.error('Error occurred while creating README:', err);
      } else {
        console.log('README.md file successfully created!');
      }
    });

  })

  // Catches any errors that might have occurred in the rendering. //
  .catch(error => {
    console.error("Error occurred:", error);
  });

//Sources that helped me get started and to test my own code: https://codesandbox.io/s/github/samueltuki/readMe-Generator/tree/main/?file=/index.js:82-173
// and https://www.youtube.com/watch?v=OT63ATGrs5I