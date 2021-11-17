function findSmallest(a, b, c) {
    if (a > c && b > c) {
        return c;
    } else if (a > b && c > b) {
        return b;
    } else {
        return a;
    }
}
findSmallest(52, 66, 2);
// Error: findSmalest is not definded
// Cause: misspelling of findSmallest
// Method: I loaded it on an html file and entered the sources tab in chrome, which informed me of the missing definition

// Error: Wrong value returned, 66 instead of 2
// Cause: Flawed conditions in line 2 and 4
// Method: Set a breakpoint inside of findSmallest and tried in the console each of the conditions, the first one,
// sould be true but its false because it expects a to be the greatest for c to be the smallest
// To resolve this, I changed the if statement to check things seperately and switched the returns in lines 5 and 7
