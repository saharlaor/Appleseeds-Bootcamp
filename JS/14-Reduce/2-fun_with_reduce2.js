function extractOnlyValues(objArr, key) {
    return objArr.reduce((prev, curr) => {
        return [...prev, curr[key]];
    }, []);
}

function countOnlyVowels(str) {
    return str.split("").reduce((prev, curr) => {
        if (["a", "e", "i", "o", "u"].includes(curr)) {
            curr in prev ? prev[curr]++ : (prev[curr] = 1);
        }
        return prev;
    }, {});
}

function addKeyAndValue(objArr, key, value) {
    return objArr.reduce((prev, curr) => {
        let tempObj = curr;
        tempObj[key] = value;
        return [...prev, tempObj];
    }, []);
}

// Tests
const cars = [
    {
        brand: "Toyota",
        model: "Corolla",
        year: 2005,
    },
    {
        brand: "Tesla",
        model: "Cybertruck",
        year: 2020,
    },
    {
        brand: "Ford",
        model: "Focus",
        year: 2018,
    },
];
console.log("extractOnlyValues: ", extractOnlyValues(cars, "model")); // ["Corolla", "Cybertruck", "Focus"]
console.log("countOnlyVowels: ", countOnlyVowels("afdjsilafjlewafmifdisaln")); // {a:4, i:3, e:1}
console.log("addKeyAndValue: ", addKeyAndValue(cars, "color", "Silver"));
