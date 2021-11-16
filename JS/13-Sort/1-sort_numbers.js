const numbers = [1, -5, 666, 2, 400, 11];

const ascendingNumbers = numbers.slice().sort((a, b) => a - b);
const descendingNumbers = numbers.slice().sort((a, b) => b - a);

console.log("Numbers: " + numbers);
console.log("Numbers Ascending: " + ascendingNumbers);
console.log("Numbers Descending: " + descendingNumbers);
