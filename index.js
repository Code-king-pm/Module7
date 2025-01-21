
import inquirer from "inquirer"
import fs from 'fs';



const writeToLog = (data) => {
  const markdown = `
## Navigation
* [Usage](#${data.usage})
* [Installation](#installation)
* [Contribution](#contribution)
* [Test](#test)

  # ${data.Name}       
<table>
  <tr>
    <td width="100%"></td>
    <td align="right">License: ${data.license}</td>
  </tr>
</table>

## Description       
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Test
${data.test}

## GitHub
${data.git}
<a href="${data.gitProfile}">profile data </a>

## Email
${data.email}

##Questions
if you have any questions u can reach me via email
nathanchavers@gmail.com
I will also share my github repository
<a href = "https://github.com/Code-king-pm">Code-king-pm</a>




`;

  fs.writeFile('README.md', markdown, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Success!');
    }
  });
};

  


  inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'Name',
    },
    {
      type: 'input',
      message: 'description',
      name: 'description',
    
    },
    {
      type: 'input',
      message: 'installation instructions',

      name: 'installation',
    },
    {
        type: 'input',
        message: 'usage information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'contribution guidelines',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'test instructions',
        name: 'test',
      },
      {
        type: 'list',
        message: 'license',
        name: 'license',
        choices: ['Monkey', 'Bannana', '2ndBannana', '3rdBannana'],
      },
      {
        type: 'input',
        message: 'Git Username',
        name: 'git',
      },
      {
        type: 'input',
        message: 'GitHub profile',
        name: 'gitProfile',
      },
      {
        type: 'input',
        message: 'Your email?',
        name: 'email',
      },
  ])
  .then((response) =>{
    writeToLog(response);

})


