/** 
 * @description : enter N integers and count the triplets such that their sum is
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const sumOf3Object = require('../sumOf3/sumOf3Bl');
var n = input.question("enter the number of elements");
console.log("enter the elements");
var array = [];
for(let i=0;i<n;i++)
{
    array[i] = input.questionInt('');
}
console.log(sumOf3Object.sumOf3(n,array));
