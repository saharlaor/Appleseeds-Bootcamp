Array.prototype.myFilter = function (callback) {
  const newArr = [];
  this.forEach((element) => {
    if (callback(element)) newArr.push(element);
  });
  return newArr;
};

Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i])) return this[i];
  }
};

Array.prototype.myReduce = function (callback, start) {
  let acc = start || this[0];
  const workingArr = start ? this : this.slice(1);
  workingArr.forEach((element) => {
    acc = callback(acc, element);
  });
  return acc;
};

console.log([1, 2, 3, 4, 5, 6, 7].myFilter((n) => n % 2)); // All odd numbers

console.log([1, 4, 5, 9, 14, 23, 37].myFind((n) => !(n % 3))); // 9
console.log([1, 4, 5, 9, 14, 23, 37].myFind((n) => !(n % 7))); // 14

console.log([1, 4, 5, 9, 14, 23, 37].myReduce((acc, n) => acc + n)); // 93
console.log([1, 4, 5, 9, 14, 23, 37].myReduce((acc, n) => Math.abs(acc - n))); // 14
