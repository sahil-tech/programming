/**
 * @description : read the input string and make changes according to problem statement
 * @param {str} : input string on which changes have to be made 
 */
try{
var expression = (str) =>{
 str = str.replace(/<<name>>/g, "sahil");
 str = str.replace(/<<full name>>/g, "sahil jindal");
 str = str.replace(/<<xxxxxxxxxx>>/g, "9898989898");
 str = str.replace(/<<01-01-2016>>/g, "04/09/2019");
 return str;
}
}
catch(err){
    console.log("error");
}
module.exports = {expression}
      