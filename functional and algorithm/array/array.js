/** 
 * @description : take array as input from user and print it
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const arrayObject = require('../array/arrayBl');
var numberOfRows = input.question("enter number of rows");
var M = numberOfRows;
var numberOfColumns = input.question("enter number of columns");
var N = numberOfColumns;
console.log("enter elements")
console.log(arrayObject.array(M,N));
