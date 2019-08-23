/** 
 * @description : compute prime factors of provided integer
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const factorsObject = require('../factors/factorsBl');
var number = input.question("enter any integer "); // asking user to enter the number  
console.log(factorsObject.factors(number));
