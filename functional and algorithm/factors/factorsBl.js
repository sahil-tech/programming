/**
 * @overview : prime factorization
 * @decription :compute prime factors of provided integer
 * @param {number} integer whose prime factors has to be calculated 
 */
try{
var factors = (number) => { 
    if(number%2==0){                         // checking if 2 is a factor or not
        console.log(2);
    }
    for(let i=2 ; i<=number ; i++){           
        var count = 0;
        if(number%i==0){
            for (let j=2 ; j<i ; j++){
                if(i%j!=0){
                    count++
                }
                if(count==(i-2)){
                    console.log(i);
                }

            }
        }
    }


}
}
catch(err){
    console.log("something is not good");
}
module.exports = {factors}