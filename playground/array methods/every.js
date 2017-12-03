// iterates through an array
// runs a callback on each value in the array
// if the callback returns fale for any single value, return false
// otherwise return false
// the result of the callback will allways be a boolean

let arr = [-1, -2, -3];
arr.every(function (value, index, array) {
  return value < 0;
});

function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) return false;
  }
  return true;
}

console.log(myEvery(arr, x => x > 0));

function allLowerCase(str) {
  return str.split('').every(x => x === x.toLowerCase());
}
console.log(allLowerCase('qweTyui'));

function allArrays(arr) {
  return arr.every(x => Array.isArray(x));
}
console.log(allArrays([[1], [2], {}]));

// solution
let array = [1, 2, 4, 5, 7];

function hasOdd(arr) {
  return arr.some(x => x % 2 === 0);
}

function hasZero(num) {
  return num.toString().split('').some(x => x === '0');
}

function hasOnlyOdd(arr) {
  return arr.every(x => x % 2 !== 0);
}

function hasNoDuplicates(arr) {
  return arr.every(function (val) {
    return arr.indexOf(val) === arr.lastIndexOf(val);
  });
}

function hasNoDuplicates2(arr) {
  return arr.every(function (value, index) {
    return arr.every((val, idx) => value !== val || index === idx);
  });
}

function hasCertainKey(arr, key) {
  return arr.every(x => key in x);
}

function hasCertainValue(arr, key, searchValue) {
  return arr.every(x => x[key] === searchValue);
}

console.log(hasOdd(array));
console.log(hasZero(1234234));
console.log(hasOnlyOdd(array));
console.log(hasNoDuplicates([1, 2, 3, 4, 5, 6]));
console.log(hasNoDuplicates2([1, 2, 3, 4, 5, 6]));
console.log(hasCertainKey([{ name: 'Ada', age: 22 }, { name: 'Mike', age: 33 }],'age'));
console.log(hasCertainValue([{ name: 'Ada', age: 22, car:true }, { name: 'Mike', age: 22, car:true }],'car',false));