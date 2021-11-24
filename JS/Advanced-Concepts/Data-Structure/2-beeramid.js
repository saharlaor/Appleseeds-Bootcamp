var beeramid = function (bonus, price) {
    let level = 1;
    for (let beerNum = 1; beerNum < bonus / price; beerNum += level ** 2) {
        level++;
    }
    return level - 1;
};

console.log(beeramid(454, 5));
