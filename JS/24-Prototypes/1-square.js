function Square(a, b, c, d) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.d = d;
}

Square.prototype.isSquare = function () {
  return Object.values(this).every((side) => side === this.a);
};

const square = new Square(10, 10, 10, 10);
console.log(square.isSquare()); // True
const rectangle = new Square(10, 200, 10, 200);
console.log(rectangle.isSquare()); // False
