const objectFlipper = (obj) => {
    let tempObj = {};
    Object.entries(obj).map((entry) => (tempObj[entry[1]] = entry[0]));
    return tempObj;
};

console.log(objectFlipper({ a: 1, b: 2, c: 3 }));
