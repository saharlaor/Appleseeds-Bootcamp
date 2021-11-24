class Stack {
    constructor() {
        this.arr = new Array();
    }

    push(val) {
        this.arr[this.arr.length] = val;
    }

    pop() {
        let val = this.arr[this.arr.length - 1];
        this.arr = this.arr.slice(0, this.arr.length - 1);
        return val;
    }
}

let s = new Stack();
s.push(1); // s = [1]
s.push(2); // s = [1, 2]
s.push(3); // s = [1, 2, 3]
s.push(4); // s = [1, 2, 3, 4]

console.log(s.pop()); // output: 4,         s: [1, 2, 3]
console.log(s.pop()); // output: 3,         s: [1, 2]
console.log(s.pop()); // output: 2,         s: [1]
s.push(9001); //                             s: [1, 9001]
console.log(s.pop()); // output: 9001,      s: [1]
console.log(s.pop()); // output: 1,         s: []
console.log(s.pop()); // output: undefined, s: []

s.push(10); //                              s: [10]
console.log(s.pop()); // output: 10,        s: []
console.log(s.pop()); // output: undefined, s: []
console.log(s.pop()); // output: undefined, s: []
