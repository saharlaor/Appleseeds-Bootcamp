function getSumOfEven(arr) {
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
}
getSumOfEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// Error: getSumOfEven returns NaN
// Cause: arr[10] is undefined
// Method: Set a breakpoint inside the function and observe the values returned for each part

// Error: The index is wrong for getting the even numbers
// Cause: Arrays have a 0 based index, so the second value of the array is in index 1
// Method: Same as the last one, look at the values returned, they were odd and started at 3
