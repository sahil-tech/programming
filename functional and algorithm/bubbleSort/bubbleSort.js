const input = require('readline-sync');
const bubbleSortObject = require('../utilityClass/utilityClassBl');
var n2 = input.questionInt("enter length of array");
var array2 = [];
console.log("enter the elements");
for(let i=0;i<n2;i++){
    array2[i] = input.questionInt("enter " + (i+1) + " element : ");
}
console.log(bubbleSortObject.bubbleSortInt(n2 , array2 ));