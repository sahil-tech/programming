/** 
 * @description : to find roots of a quadratic equation
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const quadraticObject = require('../quadratic/quadraticBl');
var a = input.question("enter the coefficient of x square");
var b = input.question("enter the coefficient of x");
var c = input.question("enter the constant");
console.log(quadraticObject.quadratic(a,b,c));