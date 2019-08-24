/** 
 * @description : to read a file and find a particular word in it
 * @since : 09/24/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const fileObject = require('../utilityClass/utilityClassBl');
const fs = require('fs');
 fs.readFile('sahil.txt' , 'utf-8' , (err, data) =>{ 
    if (err) throw err; 
    console.log(data);
    var array = [];
    array = data.split(" ");
    array.sort();
    var start = 0 ;
    var x = input.question("enter the element you want to find");
    var end = array.length;
    console.log(fileObject.binarySearchString(array , x , start , end));
}
)


