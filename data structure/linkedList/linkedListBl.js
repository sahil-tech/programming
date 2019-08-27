class Node { 
    // constructor 
    constructor(element) 
    { 
        this.element = element; 
        this.next = null
    } 
} 
class LinkedList { 
    constructor() 
    { 
        this.head = null; 
        this.size = 0; 
    } 
  
    add(element) 
    { 
    // creates a new node 
       var node = new Node(element); 
  
    // to store current node 
       var current; 
  
    // if list is Empty add the 
    // element and make it head 
       if (this.head == null) 
           this.head = node; 
       else { 
           current = this.head; 
  
        // iterate to the end of the 
        // list 
        while (current.next) { 
            current = current.next; 
        } 
  
        // add node 
        current.next = node; 
    } 
    this.size++; 
    }

    printList() 
    {    
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
             str += curr.element + " "; 
             curr = curr.next; 
        } 
    console.log(str); 
    
    }
    stringList() 
    {    
        var curr = this.head; 
        var str = ""; 
        while (curr) { 
             str += curr.element + " "; 
             curr = curr.next; 
        } 
        return(str); 
    
    }

    removeElement(element){
       var current = this.head; 
       var prev = null; 
  
    // iterate over the list 
       while (current != null) { 
        // comparing element with current 
        // element if found then remove the 
        // and return true 
            if (current.element == element) { 
               if (prev == null) { 
                  this.head = current.next; 
            }  else { 
                  prev.next = current.next; 
            } 
            this.size--; 
            return current.element; 
        } 
        prev = current; 
        current = current.next; 
    } 
    return -1; 
} 
    find(x)
    {
        var cur  = this.head; 
        var count = 0;
        while(cur){
            if(cur.element == x){
                //return "your element is at index : " + count;
                 this.removeElement(x) ;
                 return "element was present hence removed"
            }
            else{
                cur = cur.next;
                count++;
            }
        }
        console.log("element no found");
         this.add(x);
         return "element added"
    }
    sort(){
        var current = this.head
         for(current = current.next ; current != null ; current = current.next){
             for(let forward = this.head ; forward != current ; forward = forward.next){
                 if(current.element < forward.element){
                var swap = forward.element;
                forward.element = current.element;
                current.element = swap;
                 }
             }
         }
    
    }

}
module.exports = {LinkedList}
 
