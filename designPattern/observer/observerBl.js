class Observable {
    constructor() 
    {
      this.observers = [];
    }
    subscribe(observer) 
    {
      this.observers.push(observer);
    }
    notifyAll()
    {    
      this.observers.map(observer => observer.notify())  
    }
}


class Observer {
    constructor(name) {
        this.name = name;
    }  
    notify() {
        console.log(`${this.name} is notified`);
    }
}
      
const observable = new Observable();

const observer1 = new Observer("First Observer");
const observer2 = new Observer("Second Observer");
const observer3 = new Observer("Third Observer");

observable.subscribe(observer1);
observable.subscribe(observer2);
observable.subscribe(observer3);

observable.notifyAll();