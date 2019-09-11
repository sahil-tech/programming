var baap = () =>{
    var array = [];
    var instance ;
     loadArray = () =>
    {
        array.push("ram");
        array.push("sham");
    }
     getArray = () =>
    {
            return array;
    }
     getInstance = () =>
    {
            if(!instance){
                instance = getArray();
            }
            return instance;
    }

}

console.log(baap());
//array1.push("sita");
//array2.push("gita");
//console.log(array1);
//console.log(array2);