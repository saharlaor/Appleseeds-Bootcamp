const populations = [123456, 432908, 9200400, 5398737];

const percentageOfWorld = (population) => {
    const worldPop = 7900000000;
    return (population / worldPop) * 100;
};

const populationPercentages = (populations) => {
    const percentages = [];
    for (const pop of populations) {
        percentages.push(percentageOfWorld(pop));
    }
    return percentages;
};

console.log(populationPercentages(populations));
