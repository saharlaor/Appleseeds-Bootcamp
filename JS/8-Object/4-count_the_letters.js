const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    let lettersObj = {};
    let joinedStr = arr.join("").split(" ").join("").toLowerCase();
    joinedStr.split("").forEach((char) => {
        lettersObj[char] = char in lettersObj ? lettersObj[lowerChar] + 1 : 1;
    });

    // Extra letter with most occurances
    lettersObj.mostOccurances = Object.keys(lettersObj).reduce((prev, curr) =>
        lettersObj[prev] < lettersObj[curr] ? curr : prev
    );

    return lettersObj;
};

console.log(countLetters(array));
