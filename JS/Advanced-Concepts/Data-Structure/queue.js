class Queue {
    constructor() {
        this.arr = new Array();
    }

    insert(val) {
        this.arr[this.arr.length] = val;
    }

    remove() {
        let val = this.arr[0];
        this.arr = this.arr.slice(1);
        return val;
    }
}

let q = new Queue();
q.insert(1); // q = [1]
q.insert(2); // q = [1, 2]
q.insert(3); // q = [1, 2, 3]
q.insert(4); // q = [1, 2, 3, 4]

console.log(q.remove()); // output: 1,         q: [2, 3, 4]
console.log(q.remove()); // output: 2,         q: [3, 4]
console.log(q.remove()); // output: 3,         q: [4]
q.insert(9001); //                             q: [4, 9001]
console.log(q.remove()); // output: 4,         q: [9001]
console.log(q.remove()); // output: 9001,      q: []
console.log(q.remove()); // output: undefined, q: []

q.insert(10); //                               q: [10]
console.log(q.remove()); // output: 10,        q: []
console.log(q.remove()); // output: undefined, q: []
console.log(q.remove()); // output: undefined, q: []
