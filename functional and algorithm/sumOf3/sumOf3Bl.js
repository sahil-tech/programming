/**
 * @overview : print triplets such that thir sum is zero
 * @description : enter N integers and count the triplets such that their sum is zero
 * @param {n} number of elements  
 * @param {array} group of elements user added 
 */
try{
var sumOf3 = (n,array) => {
    var count = 0 ;
    for(let i=0;i<n-2;i++){
        for(let j=i+1;j<n-1;j++){
            for(let k=i+2;k<n;k++){
                if(array[i]+array[j]+array[k]==0){  
                    count++;
                    console.log("triplet : " + array[i] + " + " + array[j] + " + " + array[k]);
                }
            }
        }

    }
    console.log("number of triplets : " + count);

}
}
catch(err){
    console.log("some =thing is not good");
}
module.exports = {sumOf3}