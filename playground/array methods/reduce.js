// accepts a callback function and an optional second parameter
// iterates through an array
// runs a callback on each value in the array
// the first parameter to the callback is either the first value in array or the optional second parameter
// the first parameter to the callback is often called "accumulator"
// the returned value from the callback becomes the new value of accumulator
// WHATEVER IS RETURNED FROM THE CALLBACK FUNCTION, BECOMES THE NEW VALUE OF THE ACCUMULATOR

let arr = [1, 2, 3, 2, 5, 3, 3];
let sum = arr.reduce(function (accumulator, nextValue, index, array) {
  return accumulator + nextValue;
}, 100);
console.log(sum);

let names = ['Tim', 'Matt', 'Colt', 'Elie'];
let s = names.reduce(function (accumulator, nextValue) {
  return accumulator += ' ' + nextValue;
}, 'The instructors are ');

console.log(s);

let obj = arr.reduce(function (accumulator, nextValue) {
  if (nextValue in accumulator) {
    accumulator[nextValue]++;
  } else {
    accumulator[nextValue] = 1;
  }
  return accumulator;
}, {});
console.log(obj);

let odd = arr.reduce(function (accumulator, nextValue) {
  if (nextValue % 2 !== 0) {
    accumulator += nextValue;
  }
  return accumulator;
});
console.log(odd);

function createFullName(arr) {
  return arr.reduce((accumulator, nextValue) => {
    accumulator.push(nextValue.first + ' ' + nextValue.last);
    return accumulator;
  }, []);
}
let people = [{ first: 'Larry', last: 'Klinth', age:22 }, { first: 'Aron', last: 'Mean', age:17 }, { first: 'Mike', last: 'Bruth', age:22 }];

console.log(createFullName(people));

// solution
function extractValue(arr, key) {
  return arr.reduce((accumulator, nextValue) => {
    accumulator.push(nextValue[key]);
    return accumulator;
  }, []);
}

console.log(extractValue(people, 'last'));

function vowelCount(str) {
  let vowels = "aeiou";
  return str.split('').reduce((acc, next) => {
    if (vowels.indexOf(next.toLowerCase()) > 0) {
      if (next in acc) {
        acc[next]++;
      } else {
        acc[next] = 1;
      }
    }
    return acc;
  }, {});
}

console.log(vowelCount("quweritiyui"));

function addKeyAndValue(arr, key, value) {
  return arr.reduce(function (acc, next, idx) {
    acc[idx][key] = value;
    return acc;
  }, arr);
}

console.log(addKeyAndValue(people, 'car', true));

function partition(arr,cb){
  return arr.reduce(function(acc,next){
    if(cb(next)){
      acc[0].push(next);
    } else{
      acc[1].push(next);
    }
    return acc;
  },[[],[]]);
}

console.log(partition(people,x=>x.age>17));