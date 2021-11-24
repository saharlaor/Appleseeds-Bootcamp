function decodeStr(str) {
    let result = "";
    let letterRegex = /[a-z]/;

    for (let i = 0; i < str.length; i++) {
        if (letterRegex.test(str[i])) {
            result += str[i];
        } else if (str[i] === "]") {
            return result;
        } else {
            let openingParenthasis = str.indexOf("[", i + 1);

            let tempIndex = closingIndex(str, openingParenthasis + 1);
            result += decodeStr(
                str.slice(openingParenthasis + 1, tempIndex)
            ).repeat(str.slice(i, openingParenthasis));
            i = tempIndex - 1;
        }
    }

    return result;
}

function closingIndex(str, start) {
    let depth = 1;
    let index;
    for (index = start; index < str.length && depth > 0; index++) {
        if (str[index] === "]") {
            depth--;
        } else if (str[index] === "[") {
            depth++;
        }
    }
    return index;
}

console.log(
    decodeStr("a2[bc14[d]ef3[a]b]cd5[g]"),
    "\nabcddddddddddddddefaaabbcddddddddddddddefaaabcdggggg expected"
);
