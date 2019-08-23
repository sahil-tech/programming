/**
 * @description : to check wether given strings are anagram or not
 * @param {str1} first of 2 strings 
 * @param {str2} second string
 */
try{
var anagram = (str1,str2) =>{
    var arr1 = str1.split("");               // converting string to array
    var arr2 = str2.split("");
    arr1.sort();                             // sorting array
    arr2.sort();
    str1=arr1.toString();                    // converting array to string
    str2=arr2.toString();
    if(str1==str2){
        console.log("they are anagram");
    }
    else{
        console.log("they are not anagram");
    }

}
}
catch(err){
    console.log("something is not good");
}
module.exports = {anagram}