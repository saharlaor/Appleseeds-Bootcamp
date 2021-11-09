const lengthOfArrayStrings = (arr) => {
    let tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].length;
    }
    return tempArr;
};

console.log(lengthOfArrayStrings(["boo", "doooo", "hoo", "ro"]));
