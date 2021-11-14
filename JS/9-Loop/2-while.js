const populations = [123456, 432908, 9200400, 5398737];

const percentageOfWorld = (population) => {
    const worldPop = 7900000000;
    return (population / worldPop) * 100;
};

const populationPercentages = (populations) => {
    const percentages = [];
    while (populations.length > 0) {
        percentages.push(percentageOfWorld(populations.shift()));
    }
    return percentages;
};

console.log(populationPercentages(populations));
