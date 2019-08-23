/**
 * @description : to guess the number in n questions using binary search
 * @param {array} set of range of number in between which user has to think 
 * @param {start} starting index of new array 
 * @param {end} ending pindex of new array 
 */
try{
    var temp = 0;
var question = (array , start , end , n) =>{
    const input = require('readline-sync');
    mid = Math.floor((start+end)/2);
    while(temp < n){
        var ans = input.question("is your number higher or lower or equal to : " + array[mid] + " ?");
        if(ans == "equal" ){
            temp++;
           return "i did it";
        }
        if(ans == "higher"){
            temp++;
           start = mid+1;
           console.log(temp);
           return question(array , start , end , n);
        } 
        if(ans == "lower"){
            temp++
           end = mid-1;
           console.log(temp);
           return question(array , start , end , n);
        }
    }
    if(temp >= n){
        return "GAME OVER";
    }    

}
}
catch(err){
    console.log("invalid inputs");
}
module.exports = {question}
