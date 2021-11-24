function trailingZeros(num, base) {
    //your code here
    let denominators = factorize(base);
    let relevantDenominators = Object();
    Object.keys(denominators).map((key) => (relevantDenominators[key] = 0));

    for (let i = 2; i < num + 1; i++) {
        let iDenominators = factorize(i);
        for (const key in iDenominators) {
            if (Object.keys(relevantDenominators).includes(key)) {
                relevantDenominators[key] += iDenominators[key];
            }
        }
    }
    return Object.entries(relevantDenominators).reduce((min, [key, val]) => {
        let tempVal = val / denominators[key];
        if (min > tempVal) {
            return tempVal;
        }
        return min;
    }, Object.values(relevantDenominators)[0]);
}

function factorize(number) {
    let commonDenominators = {};
    for (let i = 2; number !== 1; i++) {
        while (number % i === 0) {
            commonDenominators[i] = commonDenominators[i]
                ? commonDenominators[i] + 1
                : 1;
            number /= i;
        }
    }
    return commonDenominators;
}

console.log(trailingZeros(15, 10));
console.log(trailingZeros(7, 2));
