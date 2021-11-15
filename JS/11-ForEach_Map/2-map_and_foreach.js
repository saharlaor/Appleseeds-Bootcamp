function doubleValues(arr) {
    return arr.map((val) => val * 2);
}

function onlyEvenValues(arr) {
    let newArr = [];
    arr.forEach((val) => {
        val % 2 === 0 && newArr.push(val);
    });
    return newArr;
}

function showFirstAndLast(arr) {
    return [arr[0], arr.at(-1)].map((val) => val.toString());
}

function vowelCount(str) {
    const vowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    str.toLowerCase()
        .split("")
        .forEach((letter) => {
            if (letter in vowelObj) {
                vowelObj[letter] += 1;
            }
        });
    return vowelObj;
}

function capitalize(str) {
    return str
        .split("")
        .map((letter) => letter.toUpperCase())
        .join("");
}

function shiftLetters(str) {
    const charCodes = str
        .split(" ")
        .map((word) => word.split("").map((char) => char.charCodeAt()));
    let encoded = "";
    charCodes.forEach((word) => {
        word.forEach((code) => {
            if (code === 90 || code === 122) {
                code -= 26;
            }
            encoded += String.fromCharCode(code + 1);
        });
        encoded += " ";
    });
    return encoded;
}

function swapCase(str) {
    return str
        .split(" ")
        .map((val, i) => (i % 2 === 0 ? val.toUpperCase() : val.toLowerCase()))
        .join(" ");
}

// Tests
const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];
const gibberish = "asdfqtweriodfsa pjemlvjia opvx;kfiweau fialsjfkl";
console.log(doubleValues(fibonacci)); // [2,   2,  4,  6,  10, 16,  26, 42, 68, 110, 178, 288]
console.log(onlyEvenValues(fibonacci)); // [ 2, 8, 34, 144 ]
console.log(showFirstAndLast(fibonacci)); // ["1", "144"]
console.log(vowelCount(gibberish)); // {a: 5, e: 3, i: 4, o: 2, u: 1}
console.log(capitalize(gibberish)); // ASDFQTWERIODFSA PJEMLVJIA OPVX;KFIWEAU FIALSJFKL
console.log(shiftLetters(gibberish)); // btegruxfsjpegtb qkfnmwkjb pqwy<lgjxfbv gjbmtkglm
console.log(swapCase(gibberish)); // ASDFQTWERIODFSA pjemlvjia OPVX;KFIWEAU fialsjfkl
