function lg(number, solution) {
    return number === solution ? 1 : lg(number, solution / number) + 1;
}

console.log(lg(5, 625));
console.log(lg(8, 512));
console.log(lg(7, 343));
console.log(lg(2, 4096));
