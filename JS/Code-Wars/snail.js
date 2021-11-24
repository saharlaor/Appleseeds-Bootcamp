snail = function (array) {
    // enjoy
    if (!array.length || !array[0].length) return [];
    let newArray = array[0];
    array.slice(1).forEach((row) => newArray.push(row[row.length - 1]));
    newArray = [
        ...newArray,
        ...array[array.length - 1].slice(0, array.length - 1).reverse(),
    ];
    array
        .slice(1, array.length - 1)
        .reverse()
        .forEach((row) => newArray.push(row[0]));
    newArray = [
        ...newArray,
        ...snail(
            array
                .slice(1, array.length - 1)
                .map((row) => row.slice(1, row.length - 1))
        ),
    ];
    return newArray;
};

// snail([[]]);
snail([[1]]);
