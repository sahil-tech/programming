
var win = 0;
var loose = 0;
var winPercentage;
var loosePercentage;
/**
 * @overview : gambler
 * @description : stimulates a gambler who starts with stake and place fair bet of $1 until he/she go broke or completes the goal using random number.
 * @param {stake}  stake money user has 
 * @param {goal} money user wants to reach 
 * @param {rounds} number of rounds a user wants to play 
 */
try{
var gambler = (stake , goal , rounds) =>{
for(let i=0;i<rounds;i++){
    var temp = stake;
    while(temp!= goal && temp!=0){
        var num = Math.random();
        if(num > .5){                             // considering num >.5 as win.
            temp++;
        }
        if(num <.5){                             // considering num <.5 as loose.
            temp--;
        }
    }
    if(temp==goal){
        console.log("you have won the game");
        win++;
    }
    if(temp==0){
        console.log("you have lost the game");
        loose++;

    }
}
console.log("number of wins: " + win);
winPercentage =  (win/rounds)*100;
loosePercentage =  (loose/rounds)*100;
console.log("win percentage: " + winPercentage);
console.log("loose percentage: " + loosePercentage);
}
}
catch(err){
    console.log("something is not good");
}

module.exports = {gambler}