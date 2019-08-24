const input = require('readline-sync');
const mergSortObject = require('../utilityClass/utilityClassBl')
var n = input.questionInt("enter the length of array : ");
var array = [];
for(let i=0;i<n;i++){
    array[i] = input.questionInt("enter " + (i+1) + " element : ")
}
console.log( mergSortObject.mergSort(array));
