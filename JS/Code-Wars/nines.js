function number9(n) {
    let digits = n.toString().split("").reverse();
    let numLength = digits.length;
    let extra = Math.floor(n / 10 ** (numLength - 1));
    return digits.reduce((acc, curr, i) => {
        if (curr === "9") {
            acc += Number(digits.slice(0, i).reverse().join("")) + 1;
        }
        return acc + Number(curr) * i * Math.floor(10 ** (i - 1));
    }, 0);
}

console.log(number9(891));
console.log(number9(899));
console.log(number9(901));
console.log(number9(909));
