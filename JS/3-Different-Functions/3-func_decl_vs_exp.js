function percentageOfWorld1(population) {
    const worldPop = 7900000000;
    return (population / worldPop) * 100;
}

const percentageOfWorld2 = (population) => {
    const worldPop = 7900000000;
    return (population / worldPop) * 100;
};

let israelPop = 9200000;
let usaPop = 332278200;
let finlandPop = 5528737;

console.log(
    `Israel's population is ${percentageOfWorld1(
        israelPop
    )}% of the population of the world`
);
console.log(
    `The USA's population is ${percentageOfWorld1(
        usaPop
    )}% of the population of the world`
);
console.log(
    `Finlands's population is ${percentageOfWorld1(
        finlandPop
    )}% of the population of the world`
);
console.log(
    `Israel's population is ${percentageOfWorld2(
        israelPop
    )}% of the population of the world`
);
console.log(
    `The USA's population is ${percentageOfWorld2(
        usaPop
    )}% of the population of the world`
);
console.log(
    `Finlands's population is ${percentageOfWorld2(
        finlandPop
    )}% of the population of the world`
);
