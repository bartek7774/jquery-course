let arr=[{email:'jon',age:22},{email:'mike',age:12},{email:'jon',age:21},{email:'jon',age:21}];

function groupBy(array, key) {
  return array.reduce(function (accumulator, nextValue) {
    if (nextValue[key] in accumulator) {
      accumulator[nextValue[key]]++;
    } else {
      accumulator[nextValue[key]] = 1;
    }
    return accumulator;
  }, {});
};

console.log(groupBy(arr,'email'));