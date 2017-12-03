// creates a new array of the same length
// iterates through an array
// runs a callback function for each value in the array
// add the result of that callback function to the new array
// returns the new array

[1, 2, 3].map(function (value, index, array) {
  return value * 2;
});

function myMap(array, callback) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr.push(callback(array[i], i, array));
  };
  return arr;
}

function tripleValues(arr) {
  return arr.map(function (value) {
    return value * 3;
  });
}

function onlyFirstName(arr){
  return arr.map(function(val){
    return val.first;
  });
}

console.log([6, 2, 3, 5, 6].map(v => v % 2 === 0 ? 1 : 0));
console.log(myMap([7, 2, 3, 5, 6], v => v > 4 ? v : 0));

console.log(onlyFirstName([{first:'Time',last:'Grand'},{first:'Mike',last:'Foom'}]));
console.log([{first:'Time',last:'Grand'},{first:'Mike',last:'Foom'}].map(v=>v.last));

// solution
function doubleValue(arr){
  return arr.map(function(v){
    return v*2;
  });
}

function valTimesIndex(arr){
  return arr.map(function(value,index){
    return value*index;
  })
}

function extractKey(arr,key){
  return arr.map(function(value){
    return value[key];
  });
}

function extractFullName(arr){
  return arr.map(function(value){
    return `${value.first} ${value.last}`;
  });
}

console.log(extractFullName([{first:'Time',last:'Grand'},{first:'Mike',last:'Foom'}],'first'));