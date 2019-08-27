/**
 * @description : to calculate which note is to be given according to money
 * @param {money} money provided bu user to get change 
 */
try{
var maxCurrency = (money) =>{
    if(money > 0 && money < 2){            // if money is less then 2 return note with 1 deno.
        return 1;
    }
    if(money > 1 && money < 5){
        return 2;
    }
    if(money >= 5 && money < 10){          // if money is less then 10 and greater then 5 return note with 5 deno.
        return 5;
    }
    if(money >= 10 && money < 50){
        return 10;
    }
    if(money >= 50 && money < 100){
        return 50;
    }
    if(money >= 100 && money < 500){
        return 100;
    }
    if(money >= 500 && money < 1000){
        return 500;
    }
    if(money >= 1000 ){
        return 1000;
    }
}
}
catch(err){
    console.log("something is not good");
}

/**
 * @description : to calculate fewest notes and their denomination given in change for money user provided
 * @param {money} money provided bu user to get change 
 */
try{
 var fewestNotes = (money) =>{
     var notes = [];
     while(money>0){
         
         notes.push(maxCurrency(money));
         money = money - maxCurrency(money);    
     }
     console.log(notes.length + " notes required");
     console.log(notes)
}
}
catch(err){
    console.log("something is not good");
}
 module.exports = {fewestNotes , maxCurrency }