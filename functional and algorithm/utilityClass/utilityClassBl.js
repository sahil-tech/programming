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

var mergeSort=(test)=>{


    var n=test.length;
    if(n<2){
        return;
    }
    var mid=n/2;
    var left=[];
    var right=[];
    for(var i=0;i<mid;i++){
        left[i]=test[i];
    }
    for(var i=mid;i<n;i++){
        right[i-mid]=test[i]; // to start from 0
    }
    
    mergeSort(left);
    mergeSort(right);
    merge(left,right,test);
}

var merge=(left,right,test)=>{
    var nl=left.length;
    var rl=right.length;
    var i=0;
    var j=0;
    var k=0;
   while(i<nl&&j<rl){
       if(left[i]>right[j]){
           test[k]=right[j];
           j++;
       }
       else{
           test[k]=left[i];
           i++;
       }
        k++;
   }
   while(i<nl){
       test[k]=left[i];
       i++;
       k++;
   }
   while(j<rl){
       test[k]=right[j];
       j++;
       k++;
   }
   console.log(test);
}  
module.exports = {binarySearchInt , insertionSortInt ,  bubbleSortInt , binarySearchString , insertionSortString ,  bubbleSortString ,  mergeSort , merge}
