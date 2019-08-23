var tailsCount = 0 ;    
var headsCount = 0 ;
var percentageOfHeads;
var percentageOfTails;

/**
 * @overview : Heads and tails .calculate percentage of heads and tails
 * @description :  calculating Heads or tails using random number and calculating respective percentage
 * @param {number} number of times a user wants to flip the coin 
 */
try{
var headsAndTails = (number) => {
    for(let i=0 ; i<number ; i++)
    {
        var value= Math.random();        // assuming value greater then .5 as heads
        if(value>.5)
        {
           console.log("heads");
           headsCount++;
        }
        if(value<.5)                    // assuming value less then .5 as tails
        {
            console.log("tails");
            tailsCount++;
        }
    }
    percentageOfHeads = (heads/(heads + tails))*100;
    percentageOfTails = (tails/(heads + tails))*100;
    return  "percentageOfHeads :" + percentageOfHeads + " vs percentageOfTails :" + percentageOfTails ;

}
}
catch(err){
    console.log("something is not good");
}
module.exports = {headsAndTails}