/** 
 * @description : to print N coupon numbers and number of random number required
 * @since : 08/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const couponNumbersObject = require('../couponNumbers/couponNumbersBl');
var numberOfCoupons = input.question("enter the numbers of coupon you want to generate "); // asking user to enter the number
console.log(couponNumbersObject.couponNumbers(numberOfCoupons));
