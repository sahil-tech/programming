var iteration = 0;                                    // count of random number required
/**
 * @overview : coupon number
 * @description : to print N coupon numbers and number of random number required
 * @param {numberOfCoupons} :  number of coupons required. 
 */
try{
var couponNumbers = (numberOfCoupons) => {
  var couponSet = new Set();
  while (couponSet.size<numberOfCoupons){
    var number = (Math.random()*numberOfCoupons*10);  // generating coupon  number using random number function 
    number = Math.round(number);                      // rounding generated numbers to integers  
    couponSet.add(number);
    iteration++;
  }
  console.log(couponSet);
  console.log("number of iterations: " + iteration)
}
}
catch(err){
  console.log("something is not good");
}
module.exports = {couponNumbers}
