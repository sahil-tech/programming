/** 
 * @description : stimulates a gambler who starts with stake and place fair bet of $1 until he/she go broke or completes the goal.
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const gamblerObject = require('../gambler/gamblerBl');
var stake = input.question("enter the stake money"); // asking user to enter the number
var goal = input.question("enter the goal money"); 
var rounds =   input.question("enter number of rounds"); 
console.log(gamblerObject.gambler(stake,goal,rounds));
