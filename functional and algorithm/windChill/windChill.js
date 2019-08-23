/** 
 * @description : to calculate windChill using given method
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/

const input = require('readline-sync');
const windChillObject = require('../windChill/windChillBl');
var temprature = input.question("enter the temprature : ");
var windspeed = input.question("enter the windspeed : ");
if(temprature > 50 || windspeed < 3 || windspeed > 120){
    console.log("incorrect entry");
}
else{
    console.log(windChillObject.windChill(temprature,windspeed));
}