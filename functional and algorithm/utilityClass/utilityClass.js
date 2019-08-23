const input = require('readline-sync');
const utilityClassObject = require('../utilityClass/utilityClassBl')
var end = input.question("enter the length of array : ");
var array = [];
for(let i=0;i<end;i++){
    array[i] = input.question("");
}
var x = input.question("enter the element : ");
var start = 0;
console.log(utilityClassObject.binarySearchString(array , x , start , end));
