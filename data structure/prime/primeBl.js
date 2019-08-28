var prime = () =>{
    var array = []
    var i , j ;
    array.push(2);
    for( i=2;i<1001;i++){
        var count = 0; 
        if(i%2!=0){
            for( j=2;j<(i+1)/2;j++){
                if(i%j!=0){
                    count++;
                }
            }
            if(count==((i+1)/2)-2){
                array.push(i);
            }
        }
    }
var x = 100;
var str ;
var i = 0;
for(let j=0 ; j<10 ; j++){
    str = "prime number between  "  + ( x-100 ) + " & " + x + " : ";
    while(array[i] < x){
        str = str + array[i] + " ";
        i++
    }
    x = x + 100;
    console.log(str);
}
}
module.exports = {prime}

