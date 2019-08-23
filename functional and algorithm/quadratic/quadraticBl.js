/**
 * @overview : roots of quadratic equation
 * @description : to find roots of a quadratic equation
 * @param {a} coefficient of x suare in eqation
 * @param {b} coefficient of x in eqation
 * @param {c} constant in eqation
 */
try{
var quadratic = (a,b,c) => {
    var delta = ((b*b) - 4*a*c);
    if(delta<0){
        return "real root doesnt exist for this equation";
    }
    var root1 = (-b - Math.sqrt(delta))/(2*a);
    var root2 = (-b + Math.sqrt(delta))/(2*a);
    console.log("the roots of equation are: " + root1 + " , " + root2 );
}
}
catch(err){
    console.log("something is not good");
} 
module.exports = {quadratic}