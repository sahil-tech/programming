var primeAnagram = () => {
var arr = [];
var prArr = [];
var a1 = [];
var a2 = [];
var paArr = [];
for( i=2;i<1001;i++){
    var count = 0; 
    if(i%2!=0){
        for( j=2;j<(i+1)/2;j++){
            if(i%j!=0){
                count++;
            }
        }
        if(count==((i+1)/2)-2){
            prArr.push(parseInt(i));   
        }
    }
}
//console.log(prArr);

var array = [];
for(i=0 ; i<(prArr.length-1);i++){
    var k = 0;
    for(j=i+1 ;j<prArr.length;j++){
        a1 = [];
        a2 = []
        var s1 = prArr[i].toString();
        var s2 = prArr[j].toString();
        a1 = s1.split("");
        a2 = s2.split("");
        a1.sort();
        a2.sort();
        s1 = a1.toString();
        s2 = a2.toString();
        if(s1 == s2){
          k++;
          array.push(parseInt(prArr[j]));
        }          
    }
if(k>0){
    array.push(parseInt(prArr[i]));
}
}
var array1 = [];
array.sort(function(a,b){return a-b});
for(var i=0;i<array.length;i++){
    if(!(array1.includes(array[i]))){
        array1.push(array[i]);
    }
}
//console.log(array1);
//array.sort();
var x = 100;
var str ;
var i = 0;

 for(let j=0 ; j<10 ; j++){
    str = "primeAnagram number between  "  + ( x-100 ) + " & " + x + " : ";
    while(array1[i] < x){
        str = str + array1[i] + " ";
        i++
    }
    x = x + 100;
    console.log(str);
}
//console.log(difference(prArr,array1));
}
module.exports = {primeAnagram}





