const input = require('readline-sync');
const queueObject = require('../queue/queueBl');
const fs = require('fs');
var q1 = new queueObject.Queue();
var q2 = new queueObject.Queue();
var n = input.question("enter the no of people");
for(let i=0;i<n;i++){
    var x = input.question("enter your purpose (d or w ) ");
    var name = input.question("enter your name : ")
    if(x == "d"){
        q1.enqueue(name);
    }
    if(x == "w"){
        q2.enqueue(name);
    }
    if(x == "e"){
        return;
    }
}
    

var balance = fs.readFileSync('balance.txt' , 'utf-8' , (err,data) => {
    if(err) throw (err);
}
)
balance = parseInt(balance);
while(q1.size() != 0){
    var amount = input.questionInt(q1.front() + " enter the amount you want to deposit");
    balance = balance + amount;
    q1.dequeue();
}
while(q2.size() != 0){
    var amount = input.questionInt(q2.front() + " enter the amount you want to withdraw");
    balance = balance - amount;
    q2.dequeue();
}
console.log(balance);
fs.writeFile('balance.txt' , balance , (err) => {
    if(err) throw err;
}
)
