/**
 * @overview : leap yaar
 * @description : to print the provide year is leap or not
 * @param {year} year which user wants to check 
 */
try{
var leapYear = (year) =>{
   if(year%4==0){                          //leap years are multiple of 4
       return "it is a leap year";
   } 
   else{
       return "it is not a leap year";
   }
}
}
catch(err){
    console.log("something is not good");
}
module.exports = {leapYear}