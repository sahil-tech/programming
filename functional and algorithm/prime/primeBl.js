/**
 * @description = print prime number between 1-1000
 */
try{
var prime = () =>{
    var i , j  ;
    console.log(2);
    for( i=2;i<1001;i++){
        var count = 0; 
        if(i%2!=0){
            for( j=2;j<(i+1)/2;j++){
                if(i%j!=0){
                    count++;
                }
            }
            if(count==((i+1)/2)-2){
               console.log(i);
            }
        }  
    }

}
}
catch(err){
    console.log("something is not good");
}
module.exports = {prime}