``
let car = function(){
    let carInstance;
    function create(){
        let running = false;
        function start(){
            running = true;
        }
        function stop(){
            running = false;
        }
        function state(){
            return running?"running":"notRunning";
        }
        return{
            start:start,
            stop:stop,
            state:state
        }
    }
    return{
        getInstance: function(){
            if(!carInstance){
                carInstance = create();
            }
            return carInstance;
        }
    }
}

const cars = new car()
var car1 = cars.getInstance();
var car2 = cars.getInstance();
car1.start();
car2.stop();
console.log(car1.state());