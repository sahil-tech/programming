const input = require('readline-sync');
const linkedListObject = require('./linkedListBl');
var fs  = require('fs');
var ll = new linkedListObject.LinkedList();
var fileData = fs.readFileSync('sahil.txt' , 'utf-8' , (err, data) =>{
      if (err) throw err; 
}
)
var array = [];
array = fileData.split(" ");
for (let i=0;i<array.length;i++){
    ll.add(array[i]);
}
ll.printList();
var x = input.question("enter the element you want to find");
console.log(ll.find(x));
ll.printList();
var data = ll.stringList();
fs.writeFile('sahil.txt' , data , (err) => {
    if(err) throw err;
}
)



