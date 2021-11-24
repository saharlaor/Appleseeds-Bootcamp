let RomanNumerals = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,

    toRoman: function (number) {
        let roman = "";
        roman += "M".repeat(Math.floor(number / 1000));
        number %= 1000;
        if (number >= 900) {
            roman += "CM";
            number -= 900;
        } else if (number >= 500) {
            roman += "D";
            number -= 500;
        }
        if (number >= 400) {
            roman += "CD";
            number -= 400;
        }
        roman += "C".repeat(Math.floor(number / 100));
        number %= 100;
        if (number >= 90) {
            roman += "XC";
            number -= 90;
        } else if (number >= 50) {
            roman += "L";
            number -= 50;
        }
        if (number >= 40) {
            roman += "XL";
            number -= 40;
        }
        roman += "X".repeat(Math.floor(number / 10));
        number %= 10;
        if (number >= 9) {
            roman += "IX";
            number -= 9;
        } else if (number >= 5) {
            roman += "V";
            number -= 5;
        }
        if (number >= 4) {
            roman += "IV";
            number -= 4;
        }
        roman += "I".repeat(number);
        return roman;
    },
    fromRoman: function (roman) {
        let number = 0;
        for (let i = 0; i < roman.length; i++) {
            if (roman[i] === "C" && roman[i + 1] === "M") {
                number += 900;
                i++;
            } else if (roman[i] === "C" && roman[i + 1] === "D") {
                number += 400;
                i++;
            } else if (roman[i] === "X" && roman[i + 1] === "C") {
                number += 90;
                i++;
            } else if (roman[i] === "X" && roman[i + 1] === "L") {
                number += 40;
                i++;
            } else if (roman[i] === "I" && roman[i + 1] === "X") {
                number += 9;
                i++;
            } else if (roman[i] === "I" && roman[i + 1] === "V") {
                number += 4;
                i++;
            } else {
                number += RomanNumerals[roman[i]];
            }
        }
        return number;
    },
};
RomanNumerals.fromRoman("XXI");
