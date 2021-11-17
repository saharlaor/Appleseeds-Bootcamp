function calcAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
calcAverage([85, 90, 92]);
// Error: sum equates to NaN
// Cause: sum is never initialized and is appended to
// Method: A break point in the for loop revealed that sum is uninitialized on the first += (I gave it a value of 0)
