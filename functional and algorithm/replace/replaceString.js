const input = require('readline-sync');
const replaceStringObject = require('../replace/replaceStringBl');
var name = input.question("what is your name?");
console.log(replaceStringObject.replaceName(name));