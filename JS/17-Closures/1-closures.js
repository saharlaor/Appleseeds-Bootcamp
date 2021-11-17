var b = 1;
function someFunction(number) {
    function otherFunction(input) {
        return b;
    }
    b = 5;
    return otherFunction;
}
var firstResult = someFunction(9);
var result = firstResult(2);
console.log(result);
// Without running the code, I think the output to the console would be:

// result = 5
// firstResult would hoist the otherFucntion, and running it would grab the last value b was assigned, which would be 5

var a = 1;
function b2() {
    a = 10;
    return;
    function a() {}
}
b2();
console.log(a);
// Without running the code, I think the output to the console would be:

// 1
// After running b2, its closure is removed and the next line doesn't know it, so a would be 1

let i;
for (i = 0; i < 3; i++) {
    const log = () => {
        console.log(i);
    };
    setTimeout(log, 100);
}
// Without running the code, I think the output to the console would be:

// 0
// 1
// 2
// After running the code I saw it printed 3, 3, 3
// That's because the setTimeout is async, which means the code continues to run while the function given to the timeout waits for it to end
// So 100ms after each trigger the value of i is printed, but inside the 100ms the for loop finishes iterating i to 3
