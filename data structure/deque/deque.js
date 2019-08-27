const input = require('readline-sync');
const dequeObject = require('../deque/dequeBl');
var dq1 = new dequeObject.Deque();
var dq2 = new dequeObject.Deque();
var string = input.question("enter the string");
var arr = [];
var array = [];
arr = string.split(" ");
for(let i=0;i<arr.length;i++){
    dq1.addLast(arr[i]);
}
var string1 = dq1.str();
var string2  = dq1.reverse(dq1);
//console.log(string1);
//console.log(string2);
if(string1 == string2){
    console.log("this string is palindrom")
}
else{
    console.log("string is not a palindrom")
}


/** dq.addLast(10);
dq.addLast(100);
dq.addLast(1000);
dq.addFirst(1);
dq.removeFirst();
var a = dq.removeLast();
dq.print();
console.log(a);
var b = dq.size();
console.log(b);
*/
