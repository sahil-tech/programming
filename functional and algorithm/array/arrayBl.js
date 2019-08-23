/**
 * @overview : 2d array
 * @description : take array as input from user and print it
 * @param {M}  number of rows in array 
 * @param {N}  number of columns in array
 */
try{
var array = (M,N) => {
    var array = [];
    const input = require('readline-sync');
    for( i=0;i<M;i++){
        array[i] = []
        for(j=0;j<N;j++){
            array[i][j] =input.question('');
        }
    }
            console.log(array);
}
}
catch(err){
    console.log("something is not good");
}
module.exports = {array}