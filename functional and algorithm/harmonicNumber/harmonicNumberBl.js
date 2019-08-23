var sum = 0;       

/**
 * @overview : Harmonic Number. to compute and print the Nth harmonic number
 * @description :  Print the Nth Harmonic Number
 * @param {N} the harmonic value N 
 */
try{
var harmonicNumber = (N) => {
    for(let i=1 ; i<=N ; i++){
        sum = (sum + (1/i)); 
    }
    return "the value of Nth harmonic is : " + sum; 
}
}
catch(err){
    console.log("something is not good");
}
module.exports = {harmonicNumber}