/** 
 * @description : prints a table of power of two that are less then or equal to 2^N
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const powerOfTwoObject = require('../powerOfTwo/powerOfTwoBl');
var number = input.question("enter any integer greater then 0 and less then 31: "); // asking user to enter the number
if (number < 0 || number >= 31)    //checking if input is as required!
    {
        console.log("incorrect entry ")
    }
else{    
console.log(powerOfTwoObject.powerOfTwo(number));
}