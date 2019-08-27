class Deque{

    constructor() {
        this.items = []; 
    }
    
    addLast(element) {
        this.items.push(element);
    }

    removeFirst() {
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.shift();
    }

    addFirst(element){
         this.items.unshift(element);
    }

    removeLast() {
        if(this.isEmpty()) 
            return "Underflow"; 
        return this.items.pop();
    }

    isEmpty() 
    { 
    // return true if the queue is empty. 
        return this.items.length == 0; 
    } 


    print() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] + " "; 
        console.log(str); 
    }
    str() { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] ; 
        return str; 
    }

    size() 
    { 
    // return true if the queue is empty. 
        return this.items.length; 
    } 

   reverse(deque){
       var str = ""
       while(!deque.isEmpty()){
           var str = str + deque.removeLast();
       }
       return str;
   }
    
}
module.exports = {Deque}