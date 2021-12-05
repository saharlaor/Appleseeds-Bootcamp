const storm = {
  superPower: "Weather manipulation",
  printSuperPower: printSuperPower,
};
function printSuperPower() {
  console.log("my superpower is " + this.superPower);
}

storm.printSuperPower();
