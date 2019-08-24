var binarySearchInt = (array , x , start , end) =>{
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
         end=mid-1;
         return binarySearch(array , x , start , end);

     }


}
var binarySearchString = (array , x , start , end) =>{
    array.sort();
    while(start <= end){
        var mid = Math.floor((start+end)/2);
        if(x == array[mid]){
              return  x + " : is our required element ";
        }
        if(x > array[mid]){
              start = mid+1;
              return binarySearchString(array , x , start , end);
        }
        else{
              end=mid-1;
              return binarySearchString(array , x , start , end);

        }
    }
    console.log("element not found");


}
var insertionSortInt = () =>{
    const input = require('readline-sync');
    console.log("insertion sort begins");
    var array1  = [];
    var n1 = input.questionInt("enter array length : ");
    for(let i=0;i<n1;i++){
        array1[i] = input.questionInt("enter " + (i+1) + " element : ");
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

var insertionSortString= () =>{
    const input = require('readline-sync');
    console.log("insertion sort begins");
    var array1  = [];
    var n1 = input.questionInt("enter array length : ");
    for(let i=0;i<n1;i++){
        array1[i] = input.question("enter " + (i+1) + " element : ");
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

var bubbleSortInt = (n2 , array2) =>{
    var swap = 1;
    while(swap>0){
        swap = 0;
        for(let i=0;i<(n2-1);i++){
            j = i+1;
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

    
var bubbleSortString = (n2 , array2) =>{
        var swap = 1;
        while(swap>0){
            swap = 0;
            for(let i=0;i<(n2-1);i++){
                j = i+1;
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

var merg = (left , right ) => {
    var nl = left.length;
    var nr = right.length;
    var result = [];
    var i = 0;
    var j = 0;
    var k = 0;
    while(i < nl && j < nr){
        if(left[i] < right[j]){
            result[k] = left[i];
            i = i+1;
            k = k+1;
            }
        else{
            result[k] = right[j]
            j = j+1; 
            k = k+1;       
            }
        
    }
    while(i<nl){
        result[k] = left[i];
        i = i+1;
        k = k+1;
    }
    while(j<nr){
        result[k] = right[j];
        j = j+1;
        k = k+1;
    }
    console.log(result);
            
}

var mergSort = (array) =>{
    var n = array.length;
    if(n<2){
        return array;
    }
    var mid = Math.floor(n/2);
    var left = [];
    var right = [];
    left = array.slice(0, mid);
    right = array.slice(mid);
    mergSort(left);
    mergSort(right);
    merg(left , right);

}

    
module.exports = {binarySearchInt , insertionSortInt ,  bubbleSortInt , binarySearchString , insertionSortString ,  bubbleSortString ,  mergSort , merg}
