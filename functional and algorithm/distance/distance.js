/** 
 * @description : find distance between origin and provided coordinates
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const distanceObject = require('../distance/distanceBl');
var xCoordinate = input.question("enter x coordinate "); // asking user to enter one of the coordinates
var yCoordinate = input.question("enter y coordinate "); // asking user to ener otherv coordinate
console.log(distanceObject.distance(xCoordinate,yCoordinate)); 
