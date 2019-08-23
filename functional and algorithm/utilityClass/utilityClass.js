const input = require('readline-sync');
const utilityClassObject = require('../utilityClass/utilityClassBl')
var n2 = input.question("enter length of array");
var array2 = [];
console.log("enter the elements");
for(let i=0;i<n2;i++){
    array2[i] = input.questionInt("");
}
/** var x = input.question("enter the element ");
var start = 0;

console.log(utilityClassObject.binarySearch(array , x , start , end ));
*/

console.log(utilityClassObject.bubbleSort(n2,array2));