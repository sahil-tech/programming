const input = require('readline-sync');
const mergeSortObject = require('../utilityClass/utilityClassBl')
var n = input.questionInt("enter the length of array : ");
var test = [];
for(let i=0;i<n;i++){
    test[i] = input.questionInt("enter " + (i+1) + " element : ")
}
console.log( mergeSortObject.mergeSort(test));

