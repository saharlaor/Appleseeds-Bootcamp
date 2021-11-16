function max(arr) {
    return arr.reduce((prev, curr) => (prev > curr ? prev : curr));
}

function sumOfEvens(arr) {
    return arr.reduce((prev, curr) => (curr % 2 === 0 ? prev + curr : prev));
}

function average(arr) {
    return arr.reduce(
        (prev, curr, index) => (prev * index + curr) / (index + 1)
    );
}

// Tests
const numbers = [42, 34, 0, 8, 16, 45, 93];
console.log(max(numbers));
console.log(sumOfEvens(numbers));
console.log(average(numbers));
