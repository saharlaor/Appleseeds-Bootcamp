function countOccurrences(str, char) {
    let counter = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            counter += 1;
        }
    }
    return counter;
}
countOccurrences("ini mini miny moe", "n");
// Error: counter doesn't increment on line 5
// Cause: The operation is not saved to a variable, it does counter + 1 into the void
// Method: Going line by line in the debugger, I could see the counter did not change when I expected it to
