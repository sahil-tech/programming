/**
 * @description ; stopwatch
 */
try{
var stopWatch = () => {
const input = require('readline-sync');
var start = input.question("press a to start stopwatch")
if(start == 'a'){
    var d1 = new Date();
    var t1 =  d1.getTime();             //getTime function returns the number of milliseconds beltween midnight of January 1, 1970 and the specific date
}
var stop = input.question("press s to stop stopwatch")
if(stop == 's'){
    var d2 = new Date();
    var t2 =  d2.getTime();            
}
console.log("stopwatch reading is : " + ((t2-t1)/1000) + " seconds");  // converting milliseconds to seconds
  
}
}
catch(err){
    console.log("some =thing is not good");
}
module.exports = {stopWatch}