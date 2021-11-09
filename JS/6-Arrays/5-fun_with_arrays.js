const objArr = new Array(100);
console.log(objArr.fill({ a: "this is something" }, 0, 100));

const iterArr = Array.from(objArr, (val, i) => i + 1);
console.log(iterArr);

const myObj = {
    one: 1,
    two: 2,
    wow: "yeah",
};
const myArray = Object.values(myObj);

const newObj = Object.assign({}, myArray);

console.log(myArray instanceof Array);

const copyArray = myArray.concat();

const linkedArray = myArray;
