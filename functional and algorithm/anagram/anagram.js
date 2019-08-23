/** 
 * @description : check wether given string are anagram or not
 * @since : 09/20/2019
 * @author : Sahil Jindal
*/
const input = require('readline-sync');
const anagramObject = require('../anagram/anagramBl');
var str1 = input.question("enter first string");
var str2 = input.question("enter second string");
console.log(anagramObject.anagram(str1,str2));