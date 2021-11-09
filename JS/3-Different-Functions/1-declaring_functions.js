/*
    JavaScript - Declaring Functions
    The following exercise contains the following subjects:
        * functions
    
    Instructions
        * Please reformat the following function declarations to function expression.
        * Please reformat the following function expressions to function declarations.
    Submit the file to Hive
*/

// From function declarations to function expressions
const welcome = function () {
    let welcome = "Welcome to Appleseeds Bootcamp!";
    return welcome;
};

const power = function (a) {
    let myNumber = a;
    let result = Math.pow(myNumber, 2);
    return result;
};

const add = function (a, b = 5) {
    let myNumber = a;
    let sum = myNumber + b;
    return sum;
};

// From function expressions to function declarations
function hello() {
    return "Hello!";
}

function squareRoot(a) {
    return Math.sqrt(a);
}

function randomNumbers(a, b) {
    return Math.random() * (a - b) + b;
}

console.log(welcome()); // Welcome to Appleseeds Bootcamp!
console.log(power(5)); // 25
console.log(add(8)); // 13
console.log(add(8, 3)); // 11
console.log(hello()); // hello
console.log(squareRoot(36)); // 6
console.log(randomNumbers(7, 6)); // random between 6 and 7
