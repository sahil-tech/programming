/**
 * @overview : power of two
 * @description : prints a table of power of two that are less then or equal to 2^N
 * @param {number} the value of N.
 */
try{
var powerOfTwo = (number) =>{
    for(let i=0 ; i<=number ; i++){
    console.log("2^"+i+"="+ 2**i);    
    }
}
}
catch(err){
    console.log("something is not good");
}
module.exports = {powerOfTwo}