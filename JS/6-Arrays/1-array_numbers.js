const arr = [1, 7, 3, 0, -5, 7, 3, 9];

function arrayLength(arr) {
    let i;
    let tempArr = [];
    for (i = 0; arr[0]; i++) {
        tempArr.push(arr.pop());
    }
    // And back
    for (let j = 0; tempArr[0]; j++) {
        arr.push(tempArr.pop());
    }
    return i;
}

function arraySum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function arrayMulti(arr) {
    let multi = 0;
    for (let i = 0; i < arr.length; i++) {
        multi *= arr[i];
    }
    return multi;
}

// Tests
for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
}

console.log("Length: " + arrayLength(arr));
console.log("Sum: " + arraySum(arr));
console.log(arrayMulti(arr)); // If I concat it with a string the - sign goes away
