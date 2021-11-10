const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];

const countLetters = (arr) => {
    lettersObj = {};
    arr.forEach((word) => {
        let strippedWord = word.split(" ").join("");
        strippedWord.split("").forEach((char) => {
            let lowerChar = char.toLowerCase();
            lowerChar in lettersObj
                ? (lettersObj[lowerChar] += 1)
                : (lettersObj[lowerChar] = 1);
        });
    });

    // Extra letter with most occurances
    lettersObj.mostOccurances = Object.keys(lettersObj).reduce((prev, curr) =>
        lettersObj[prev] < lettersObj[curr] ? curr : prev
    );

    return lettersObj;
};

console.log(countLetters(array));
