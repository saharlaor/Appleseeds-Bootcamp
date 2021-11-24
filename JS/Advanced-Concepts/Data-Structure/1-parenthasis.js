function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let openParRegex = /[\(\[\{]/;
    // let isValidPar = 1;
    let parStack = [];
    let parTypes = {
        ")": "(",
        "]": "[",
        "}": "{",
    };

    return S.split("").reduce((isValidPar, par) => {
        if (openParRegex.test(par)) {
            parStack.push(par);
        } else if (parStack.pop() !== parTypes[par]) {
            isValidPar = 0;
        }
        return isValidPar;
    }, 1);

    // return isValidPar ? 1 : 0;
}

console.log(solution("([]{}})"));
