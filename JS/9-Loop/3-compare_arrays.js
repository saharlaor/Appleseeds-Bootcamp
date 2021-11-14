const food = ["Noodle", "Pasta", "Ice-cream", "Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives", "Hamburgers"];

const compareArrays = (arr1, arr2) => {
    const newArr = [];
    for (let i = 0; i < arr1.length; i++) {
        let tempVal = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            if (tempVal === arr2[j]) {
                newArr.push(tempVal);
            }
        }
    }
    if (!newArr[0]) {
        return false;
    }
    return newArr;
};

console.log(compareArrays(food, food1));
