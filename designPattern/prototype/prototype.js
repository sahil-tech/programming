class Super{
    constructor()
    {
        this.array = [];
    }
    loadData()
    {
        this.array.push("ram");
        this.array.push("sita");
        this.array.push("gansham");
        this.array.push("sham");
    }
    
    clone()
    {
        var clone = [];
        for(let i=0;i<this.array.length;i++){
            clone[i] = this.array[i];
        }
        return clone;
    }
}
var Prototype = () => {
    var array1 = [];
    var array2 = [];
    var s1 = new Super();
    s1.loadData();
    array1 = s1.clone();
    array2 = s1.clone();
    array1.push("lakshman");
    array1.push("karan");
    array2.push("johar");
    console.log(array1);
    console.log(array2);
}
Prototype();

