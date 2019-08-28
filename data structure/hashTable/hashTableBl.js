const input = require('readline-sync')
var hash = (string, max) => {
    var hash = 0;
    for (var i = 0; i < string.length; i++) {
      hash += string.charCodeAt(i);
    }
    return hash % max;
  };
  
  let HashTable = function() {
  
    let storage = [];
    const storageLimit = 14;
    
    this.print = function() {
      console.log(storage)
    }
  
    this.add = function(key, value) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        storage[index] = [
          [key, value]
        ];
      } else {
        var inserted = false;
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            storage[index][i][1] = value;
            inserted = true;
          }
        }
        if (inserted === false) {
          storage[index].push([key, value]);
        }
      }
    };
  
    this.remove = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index].length === 1 && storage[index][0][0] === key) {
        delete storage[index];
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            delete storage[index][i];
          }
        }
      }
    };
  
    this.lookup = function(key) {
      var index = hash(key, storageLimit);
      if (storage[index] === undefined) {
        return undefined;
      } else {
        for (var i = 0; i < storage[index].length; i++) {
          if (storage[index][i][0] === key) {
            return storage[index][i][1];
          }
        }
      }
    };
  
   this.find = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      console.log("there is no value associated with this key")
      var x = input.question("enter the value to add");
      this.add(key , x);
      return "value added";
   }
   else{
       console.log("key already exist");
       this.remove(key);
       return "key removed";
   }
   };
};
   
  
  
  console.log(hash('quincy', 10))
  
  let ht = new HashTable();
  ht.add('beau', 'person');
  ht.add('fido', 'dog');
  ht.add('rex', 'dinosour');
  ht.add('tux', 'penguin');
  ht.add('tux', 'sher');
  ht.add('beua', 'sher');
  console.log(ht.lookup('tux'));
  console.log(ht.lookup('beua'));
  console.log(ht.find('tux'));
  console.log(ht.find('tux'));
  ht.print();