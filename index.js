var chalk = require("chalk");

var message = "Hello " + chalk.yellow.underline("World");
console.log(message);

const error = chalk.bold.red;
const warning = chalk.keyword('orange');

console.log(error('whatttttttt!'));
console.log(warning('Warning!'));