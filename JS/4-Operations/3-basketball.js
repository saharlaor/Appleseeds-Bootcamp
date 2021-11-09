let threeGameAverage = (game1, game2, game3) => {
    return (game1 + game2 + game3) / 3;
};

let john1 = 89;
let john2 = 120;
let john3 = 103;
let johnAverage = threeGameAverage(john1, john2, john3);
let mike1 = 116;
let mike2 = 94;
let mike3 = 123;
let mikeAverage = threeGameAverage(mike1, mike2, mike3);

if (johnAverage > mikeAverage) {
    console.log("John's team has a higher average score!");
} else if (johnAverage < mikeAverage) {
    console.log("Mike's team has a higher average score!");
} else {
    console.log("It's a draw, both teams have the same average score!");
}

// let john1 = 89;
// let john2 = 120;
// let john3 = 103;
// let johnAverage = threeGameAverage(john1, john2, john3);
// let mike1 = 116;
// let mike2 = 94;
// let mike3 = 123;
// let mikeAverage = threeGameAverage(mike1, mike2, mike3);
let mary1 = 97;
let mary2 = 134;
let mary3 = 105;
let maryAverage = threeGameAverage(mary1, mary2, mary3);

if (johnAverage > mikeAverage) {
    if (johnAverage > maryAverage) {
        console.log("John's team has the highest average score!");
    } else if (maryAverage < johnAverage) {
        console.log("Mary's team has the highest average score!");
    } else {
        console.log(
            "It's a draw at the top, Mary's and John's teams have the highest average score!"
        );
    }
} else if (johnAverage < mikeAverage) {
    if (mikeAverage > maryAverage) {
        console.log("Mike's team has the highest average score!");
    } else if (maryAverage < mikeAverage) {
        console.log("Mary's team has the highest average score!");
    } else {
        console.log(
            "It's a draw at the top, Mary's and Mike's teams have the highest average score!"
        );
    }
} else {
    if (maryAverage > johnAverage) {
        console.log("Mary's team has the highest average score!");
    } else {
        console.log("It's a draw, all teams have the same average score!");
    }
}
