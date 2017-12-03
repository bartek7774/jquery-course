// creates a new array
// iterates through an array
// runs a callback function on each value in the array
// if the callback function returns true, that value will be added to the new array
// if the callback function returns false, that value will be ignored from the new array
// THE RESULT OF THE CALLBACK WILL ALLWAYS BE A BOOLEAN

[1, 23, 3].filter(function (value, index, array) {
  // return an expression
  // that evaluates to true or false
  return value > 2;
});

function myFilter(arr, callback) {
  let array = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      array.push(arr[i]);
    }
  }
  return array;
}

let instruction = [{ name: 'Elie', age: 25 }, { name: 'Mat' }, { name: 'Tim', age: 33 }, { name: 'Colt' }];
console.log(instruction.filter(x => x.name.length > 3));
console.log(myFilter(instruction, x => x.name.length > 3));

function onlyFourLetterName(arr) {
  return arr.filter(function (value) {
    return value.name.length === 4;
  });
}

function divisibleByThree(arr) {
  return arr.filter(function (value) {
    return value % 3 === 0;
  });
}
console.log(divisibleByThree([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// solution
function filterByKey(arr, key) {
  return arr.filter(function (val) {
    return val[key] !== undefined;
  });
}

function find(arr, searchValue) {
  return arr.filter(function (val) {
    return val === searchValue;
  })[0];
}


function findInObj(arr, key, searchValue) {
  return arr.filter(function (val) {
    return val[key] === searchValue;
  })[0];
}

function removeVowels(str) {
  let vowles = "aeiuo";
  return str.toLowerCase().split('')
    .filter(value => vowles.indexOf(value) === -1).join('');
}

function doubleOddNumbers(arr) {
  return arr.filter(value => value % 2 === 0).map(x => x * 2);
}

console.log(filterByKey(instruction, 'age'));
console.log(find([2, 1, 8, 3, 6, 5, 7], 1));
console.log(findInObj(instruction, 'age', 25));
console.log(removeVowels("Nampis"))
console.log(doubleOddNumbers([2, 1, 8, 3, 6, 5, 7]));