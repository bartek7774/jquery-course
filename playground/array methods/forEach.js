// Iterates through an array
// runs a callback function on each value in the array
// returns 'undefined'
// ordering parameters is crucial
[4, 6, 7].forEach(function (value, index, array) {
  console.log(`${index} ${value} ${array[index]} ${array}`);
});

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i++) {
    callback(array[i], i, array);
  }
}

myForEach([3, 1, 23], (val, i) => console.log(i, val * 2));

function halfArray(array, callback) {
  let newArray = [];
  array.forEach((val, index) => {
    newArray.push(callback(val, index));
  });
  return newArray;
}
console.log(halfArray([5, 4, 13, 9], (x, i) => (i % 2 === 0) ? Math.pow(x, 2) : Math.sqrt(x)));

// solution
function doubleValue(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val * 2);
  });
  return newArr;
}

function onlyEvenValues(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    if (val % 2 === 0) {
      newArr.push(val);
    }
  });
  return newArr;
}

function showFirstAndLast(arr) {
  let newArr = [];
  arr.forEach(function (val) {
    newArr.push(val[0] + val[val.length - 1]);
  });
  return newArr;
}

// function addKeyAndValue(arr, key, value) {
//   arr.forEach(function (val) {
//     val[key] = value;
//   });
//   return arr;
// }

function vowelCount(str){
  let splitArr=str.split("");
  let obj={};
  let vowles="aeiou";
  splitArr.forEach(function(letter){
    if(vowles.indexOf(letter.toLowerCase())!==-1){
      if(letter in obj){
        obj[letter]++;
      } else{
        obj[letter]=1;
      }
    }
  });
  return obj;
}

console.log(vowelCount("baratek"));
