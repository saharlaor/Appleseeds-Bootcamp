const letterScore = (numberScore) => {
    if (numberScore > 90) {
        return "A";
    } else if (numberScore > 80) {
        return "B";
    } else if (numberScore > 70) {
        return "C";
    } else if (numberScore > 65) {
        return "D";
    } else {
        return "F";
    }
};

console.log(letterScore(57)); // F
console.log(letterScore(67)); // D
console.log(letterScore(77)); // C
console.log(letterScore(87)); // B
console.log(letterScore(97)); // A
