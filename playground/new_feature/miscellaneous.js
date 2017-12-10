// Object.assign
// create copy of objects without the same reference
// not create deep clone

let o = { name: 'Elie', instructors: ['A', 'B'] };
// let o2=o;

// o2.name="Tim";

let o3 = Object.assign({}, o);
o3.name = "Jerry";
o3.instructors.push('C');
console.log(o);

console.log(o3);

// Array.from
// var divs=document.getElementsByTagName('div');
// var converted=[].slice.call(divs);

// // converted.reduce
// let converted2=Array.from(divs);
let arr = Array.from(new Set([1, 1, 2, 3, 4]));
console.log(arr);

// find, findIndex, indexOf, includes, Munber.isFinite

function copyObject(obj) {
  return Object.assign({}, obj);
}
function checkIfFinite(num) {
  return Number.isFinite(num);
}
function areAllNumbersFinite(arr) {
  return arr.every(v => Number.isFinite(v));
}
function convertArrayLikeObject(obj) {
  return Array.from(obj);
}
function displayEvenArguments() {
  return Array.from(arguments).filter(val => val % 2 === 0);
}

console.log(areAllNumbersFinite([1,2,Infinity,Number.EPSILON,Number.MIN_VALUE]));
console.log(copyObject({name:'John',age:22}));