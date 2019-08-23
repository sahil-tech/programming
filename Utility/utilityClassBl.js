var binarySearch = (array , x , start , end) =>{
    array.sort();
    var mid = Math.floor((start+end)/2);
     if(x == array[mid]){
         return  x + " : is our required element ";
     }
     if(x > array[mid]){
         start = mid+1;
         return binarySearch(array , x , start , end);
     }
     else{
         end=mid-1;;;;;
         return binarySearch(array , x , start , end);

     }


}
var insertionSort = () =>{
    const input = require('readline-sync');
    console.log("insertion sort begins");
    var array1  = [];
    var n1 = input.questionInt("enter array length");
    console.log("enter elemenmts");
    for(let i=0;i<n1;i++){
        array1[i] = input.question("enter " + i + " element");
        for(let j=0;j<i;j++){
           if(array1[i] < array1[j]){
               var a =array1[i];
               array1[i] = array1[j];
               array1[j] = a;

           }
        }


    }
    console.log(array1);


}

var bubbleSort = (n2 , array2) =>{
    var swap = 1;
    while(swap>0){
        for(let i=0;i<(n2-1);i++){
            j = i+1;
              swap = 0;
            if(array2[i]>array2[j]){
               var a = array2[i];
               array2[i] = array2[j];
               array2[j] = a;
               swap++;
               
            }
        }
    }
    console.log(array2); 
    }
    
module.exports = {binarySearch , insertionSort ,  bubbleSort}
