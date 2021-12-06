const obj = {
  name: "Finnish Pini",
  printName: function () {
    console.log(this.name);
  },
  printNameDelay: function () {
    setTimeout(this.printName.bind(this), 1000);
  },
};

obj.printName(); // Finnish Pini
obj.printNameDelay(); // (1 Second) Finnish Pini
