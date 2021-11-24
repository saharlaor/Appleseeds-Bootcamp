function search(arr, number) {
    if (arr[0] === number) {
        return 0;
    }
    return arr[Math.floor(arr.length / 2)] <= number
        ? Math.floor(arr.length / 2 + search(arr.slice(arr.length / 2), number))
        : search(arr.slice(0, arr.length / 2), number);
}

console.log(search([1, 2, 3, 4, 5], 5));
console.log(search([1, 2, 3, 4, 5], 4));
console.log(search([1, 2, 3, 4, 5], 3));
console.log(search([1, 2, 3, 4, 5], 2));
console.log(search([1, 2, 3, 4, 5], 1));
