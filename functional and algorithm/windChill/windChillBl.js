/**
 * @overview : to calculate windchill
 * @decription : to calculate windchill using given method
 * @param {temprature} value of temprature 
 * @param {windspeed} value of windspped
 */
try{
var windChill = (temprature,windspeed) => {
    var w = (35.74)+ (0.6215*temprature) + (.4275*temprature - 35.75) * (Math.pow(windspeed , .16));
    console.log("windchill is : " + w);
}
}
catch(err){
    console.log("some =thing is not good");
}
module.exports = {windChill}