console.log(this);
// This keyword here points to the Window object in the browser and the global
// object in Node.js console

const myObj = {
  name: "Timmy",
  greet: () => {
    console.log(`Hello ${this.name}`);
  },
};
myObj.greet();
// This keyword here points to the window because the method it's in is an
// arrow function, which does not get the this context of the object it's in
// To fix the code you can convert the method to a full fledged function

const myFuncDec = function () {
  console.log(this);
};
myFuncDec();
// This keyword points to the object that runs the function, because a function
// expression has no set this, and it takes the this of the object running it

const myFuncArrow = () => {
  console.log(this);
};
myFuncArrow();
// This keyword points to the Window object, because the an arrow function does
// not have this of its own

document.querySelector(".element").addEventListener(() => {
  console.log(this);
});
// This keyword points to the Window object, because it is implemented using
// arrow function, which the window is actually running

// To fix the code, switch the arrow function to a function decleration,
// that will let the HTML element with "element" class run it, because
// event listeners are properties of the html objects, so the specific
// implementation of the element will be the object logging "this"
