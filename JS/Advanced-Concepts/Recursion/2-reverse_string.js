function reverseString(arr) {
    if (!arr[0]) {
        return arr;
    }
    let val = arr.pop();
    arr = reverseString(arr);
    arr.unshift(val);
    return arr;
}

// function reverseString(arr) {
//     arr.reverse();
//     return arr;
// }

// function reverseString(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr.unshift(arr[i]);
//     }
//     return newArr;
// }

let arr = ["S", "a", "h", "a", "r"];
console.log(reverseString(arr), arr);
