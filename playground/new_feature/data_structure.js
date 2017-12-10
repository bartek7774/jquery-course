// when to use a map
// look up keys dynamically
// keys that are not string
// frequently add/remove key/value pairs

let firstMap = new Map();

firstMap.set(1, 'Elie');
firstMap.set(false, 'a boolean');
firstMap.set('nice', 'a string');
firstMap.delete('nice');

let arrayKey = [];
firstMap.set(arrayKey, [1, 2, 3, 4, 5]);

let objectKey = {};
firstMap.set(objectKey, { a: 1 });

console.log(firstMap.keys())
console.log(firstMap.size);

console.log(firstMap.get(false));
console.log(firstMap.get(arrayKey));

firstMap.forEach(v => console.log(v));

// WeakMap
// similar to a map, bu all keys must be objects
// values in a WeakMap can be cleared from memory if there is no reference to them
// mode performant than maps, but can not be iterated over


// Sets
// all values in a set are unique
// any type of  value can exist in a set
// created using the new keyword
let s = new Set;
let s2 = new Set([3, 1, 4, 1, 2, 1, 5]);
s.add(10);
s.add(20);
s.add(10);
if (s.has(10))
  s.delete(10);
console.log(s.size);

// WeakSet
// similar to a set, but all values MUST be object
// values in a WeakSet can be cleared from memory
// if there is no reference to them
// more performant than sets, but can not be iterated over

class MessageBoard {
  constructor() {
    this.messages = new Map;
    this.id = 1;
  }
  addMessage(value) {
    this.messages.set(this.id, value);
    this.id++;
    return this;
  }
  findMessageById(id) {
    return this.messages.get(id);
  }
  findMessageByValue(value) {
    for (let msg of this.messages.values()) {
      if (msg === val) return msg;
    }
  }
  removeMessage(id) {
    this.messages.delete(id);
    return this;
  }
  numberOfMessage() {
    return this.messages.size;
  }
  messageToArray() {
    return Array.from(this.messages.values());
  }
}

function uniqueValues(arr) {
  return new Set(arr).size;
}
function hasDuplicates(arr) {
  return new Set(arr).size !== arr.length;
}

console.log(new Set([1,2,3,4,2,1]));
console.log(countPairs([1,2,3,4,2,6],3));