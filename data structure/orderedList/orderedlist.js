const input = require ('readline-sync');
const orderedListObject = require('../linkedList/linkedListBl');
const fs = require('fs');
var fileData = fs.readFileSync('jindal.txt' , 'utf-8' , (err,data) => {
    if(err) throw(err);
})
var arr = [];
arr = fileData.split(" ");
var ol = new orderedListObject.LinkedList();
for(let i=0;i<(arr.length-1);i++){
    ol.add(parseInt(arr[i]));
}
ol.sort();
ol.printList();
var x = input.questionInt("enter the element you want to find");
console.log(ol.find(x));
ol.sort();
ol.printList();
var data = ol.stringList();
fs.writeFile('jindal.txt' , data , (err) => {
    if(err) throw err;
}
)

