class computer {
    constructor(ram , hdd , processor) 
    {
      this.ram = ram;
      this.processor = processor;
      this.hdd = hdd;
    }
}
var factory = (type ,ram , hdd , processor) =>{
    this.type = type;
    if(type == "pc"){
        var pc = new computer(ram , hdd , processor);
        console.log(type + " : ");
        console.log(pc.ram + " ram "+ pc.hdd + " hdd " + pc.processor + " processor ");
    }
    if(type == "server"){
        var pc = new computer(ram , hdd , processor);
        console.log(type + " : ");
        console.log(pc.ram + " ram , "+ pc.hdd + " hdd , " + pc.processor + " processor ,  ");
    }

}
factory("server" , "2 gb " , " 500 gb" , " i7");
factory("pc" , "2 gb " , " 500 gb" , " i7");