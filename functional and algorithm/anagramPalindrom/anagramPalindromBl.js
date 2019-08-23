var anagramPalindrom = () =>{
    var i , j ;
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
                prArr.push(i);   
               if(i < 99){
                   if(Math.floor(i/10)==i%10){
                       arr.push(i);
                   }
                }
               if(i > 99){
                   var a = Math.floor(i/100);
                   var b= i%100;
                   var c= b%10;
                   if(a==c){
                       arr.push(i);
                   }
                }
        }  
    }
}
    for(i=0;i<(prArr.length-1);i++){
        for(j=i+1;j<prArr.length;j++){
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
            if(s1==s2){
                console.log( prArr[i] + " & " + prArr[j])
               
            }
            
        }
    }
    console.log("these are prime and palindrom : " + arr)
}
module.exports = {anagramPalindrom}