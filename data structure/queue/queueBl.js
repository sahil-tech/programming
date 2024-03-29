class Queue 
{ 
    // Array is used to implement a Queue 
    constructor() 
    { 
        this.items = []; 
    }

    enqueue(element){    
    // adding element to the queue 
    this.items.push(element);
    }
    isEmpty() 
    { 
    // return true if the queue is empty. 
        return this.items.length == 0; 
    } 
    dequeue(){
    // removing element from the queue 
    // returns underflow when called  
    // on empty queue 
    if(this.isEmpty()) 
        return "Underflow"; 
    return this.items.shift();
    }
    printQueue() 
    { 
        var str = ""; 
        for(var i = 0; i < this.items.length; i++) 
            str += this.items[i] +" "; 
        return str; 
    }
    size() 
    { 
    // return true if the queue is empty. 
        return this.items.length; 
    } 
    front() 
    { 
    // returns the Front element of  
    // the queue without removing it. 
        if(this.isEmpty()) 
            return "No elements in Queue"; 
        return this.items[0]; 
    }       
}
module.exports = {Queue}