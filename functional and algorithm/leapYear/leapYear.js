/** 
 * @description : to print wether the year is leap or not
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const leapYearObject = require('../leapYear/leapYearBl');
var year = input.questionInt("enter the year: ");
var yearString = String(year);
if(yearString.length==4){
console.log(leapYearObject.leapYear(year));
}
else{
    console.log("incorrect entry");
}