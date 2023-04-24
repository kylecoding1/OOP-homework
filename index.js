const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters for the logo:',
    validate: function(value) {
      if (value.length > 3) {
        return 'Please enter up to three characters.';
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter the text color (keyword or hexadecimal):'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter the shape color (keyword or hexadecimal):'
  }