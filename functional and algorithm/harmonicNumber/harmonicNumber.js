/** 
 * @description : To compute Nth harmonic number
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const harmonicNumberObject = require('../harmonicNumber/harmonicNumberBl');
var N = input.question("enter the value of N: "); // asking user to enter the number
if (N==0)    //checking if input is as required!
    {
        console.log("incorrect entry ")
    }
else{    
console.log(harmonicNumberObject.harmonicNumber(N));
}