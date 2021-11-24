function sumFibs(n) {
    // you are the golden ratio.
    let [fib1, fib2, sum] = [1, 1, 0];
    for (let i = 1; i <= n; i++) {
        if (fib1 % 2 === 0) {
            sum += fib1;
        }
        [fib1, fib2] = [fib2, fib1 + fib2];
    }
    return sum;
}

console.log(sumFibs(11));
