/** 
 * @description : calculate percentage of heads and tails
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const headsAndTailsObject = require('../headsAndTails/headsAndTailsBl');
var number = input.question("how many times do you want to flip coins?: ");
if (number < 0)
    {
        console.log("incorrect entry (enter an integer greater then zero)")
    }
else{    
console.log(headsAndTailsObject.headsAndTails(number));
}

