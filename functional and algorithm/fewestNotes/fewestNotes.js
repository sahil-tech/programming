/** 
 * @description : to calculate fewest notes and their denomination given in change for money user provided
 * @since : 08/22/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const fewestNotesObject = require('../fewestNotes/fewestNotesBl')
var money = input.questionInt("enter the amount : ");
console.log(fewestNotesObject.fewestNotes(money));