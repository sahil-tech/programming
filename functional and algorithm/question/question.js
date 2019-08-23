/** 
 * @description : to guess the number in n questions using binary search
 * @since : 08/22/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const questionObject = require('../question/questionBl')
var n = input.question("enter the value of n : ");
var end = 2**n;
var array = [];
for(let i=0;i<end;i++){
    array[i] = i;
}
console.log("think of number between 1 and " + (end-1));
var start = 0;
console.log(questionObject.question(array , start , end , n));