function funcA() {
    console.log(a);
    console.log(foo());
    var a = 1;
    function foo() {
        return 2;
    }
}
funcA();
// Without running the code, I think the output in the console would be:

// undefined
// 2

var fullName = "John Doe";
var obj = {
    fullName: "Colin Ihrig",
    prop: {
        fullName: "Aurelio De Rosa",
        getFullName: function () {
            return this.FullName;
        },
    },
};
console.log(obj.prop.getFullName());
var test = obj.prop.getFullName;
console.log(test());
// Without running the code, I think the output to the console would be:

// Aurelio De Rosa
// Aurelio De Rosa

// After running the code, I saw the second line equates to undefined
// That's because the getFullName function got saved to a var and this lost its meaning
// If I run this in the browser the this

function funcB() {
    let a = (b = 0);
    a++;
    return a;
}
funcB();
console.log(typeof a);
console.log(typeof b);
// Without running the code, I think the output to the console would be:

// undefined
// Number

function funcC() {
    console.log("1");
}
funcC();
function funcC() {
    console.log("2");
}
funcC();
// Without running the code, I think the output to the console would be:

// 2
// 2

function funcD1() {
    d = 1;
}
funcD1();
console.log(d);
function funcD2() {
    var e = 1;
}
funcD2();
// console.log(e);
// Without running the code, I think the output to the console would be:

// 1
// undefined, because d wasn't initialized so the interpreter initialized it at the top,
// while e was explicitly initialized in the function, so its global scope is the function

function funcE() {
    console.log("Value of f in local scope: ", f);
}
console.log("Value of f in global scope: ", f);
var f = 1;
funcE();
// Without running the code, I think the output to the console would be:

// Value of f in global scope: undefined
// Value of f in local scope: 1
