const hero = {
  health: 5,
  power: 68,
  getStrength: function () {
    if (this.health <= 5) {
      return this.power - 10;
    } else return this.power;
  },
};
hero.getStrength = hero.getStrength.bind(hero);
function whoIsStronger(getStrength) {
  const myStrength = 82;
  console.log(`${getStrength()} < ${myStrength}`);
  if (getStrength() < myStrength) {
    return "I am stronger";
  } else return "You are stronger";
}
console.log(whoIsStronger(hero.getStrength));

// When the function called the given callback, it lost the reference of its "this"
// To fix it, we had to bind the hero object as its "this" object
