const foods = ["falafel", "sabich", "hummus", "pizza with extra pineapple"];
const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];
const words = ["apple", "supercalifragilisticexpialidocious", "hi", "zoo"];

const ascendingFoods = foods.slice().sort();
const descendingFoods = ascendingFoods.slice().reverse();
const ascendingUpperFoods = foodsWithUpperCase
    .slice()
    .sort((a, b) => (a.toLowerCase() < b.toLowerCase() ? -1 : 1));
const descendingUpperFoods = ascendingUpperFoods.slice().reverse();
const sortedByLength = words.slice().sort((a, b) => b.length - a.length);

console.log(ascendingFoods);
console.log(descendingFoods);
console.log(ascendingUpperFoods);
console.log(descendingUpperFoods);
console.log(sortedByLength);
