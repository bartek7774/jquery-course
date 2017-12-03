// iterates through an array
// runs a callback on each value in the array
// if the callback returns true for at least one single value, return true
// otherwise, return false
// the result of the callback will allways be evaluates to a boolean

let arr = [1, 2, 3, 4];
arr.some(function (value, index, array) {
  console.log(index);
  return value > 2;
});

function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    console.log(i);
    if (callback(arr[i], i, arr)) return true;
  }
  return false;
}
console.log(mySome(arr, x => x > 2));

function hasEvenNumber(arr) {
  return arr.some(function (value) {
    return value % 2 === 0;
  });
}

function hasComma(str) {
  return str.split('').some(function (value) {
    return value === ',';
  });
}
console.log(hasComma('This is  wonderful'));