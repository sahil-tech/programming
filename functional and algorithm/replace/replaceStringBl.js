try{
var replaceName = (name) =>{
    if(name.length<3){
        return "wrong input less then 3";
    }
    return "hello" + name +" ,how are you?";
}
}
catch(err){
    console.log("some =thing is not good");
}
module.exports = {replaceName}