function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
}
getSum([1, 2, 3], [5, 66, 23]);
// Error: Cannot read properties of undefined (reading 'length')
// Cause: arr1 is undefined, because when calling getSum a ',' is missing between the args, js can't read either arg and doesn't give values to either of them
// Method: I loaded it on an html file and in the console it logged the error above and the call stack (line 3 inside line 10)
// It seemed the getSum function doesn't recieve any values for its arguments, so I looked at line 10 to see 2 arrays that are not seperated.

// Error: Assignment to a constant variable
// Cause: sum is constant but it is appended to in line 4
// Method: After running it again with the "," the new error appeared in the console. I looked in the sources tab for context

// Error: sum is 29 after the fact
// Cause: the value of arr2 inside getSum is [23], that's because the array given to it is built with parenthasis inside [(5, 66, 23)]
// Method: Rerunning the program after fixing the previous problems, using a break point in line 2, I observed the values of arr1, arr2, they were [1, 2, 3], [23].
// Removing the inner parenthasis, the sum we got was 100
