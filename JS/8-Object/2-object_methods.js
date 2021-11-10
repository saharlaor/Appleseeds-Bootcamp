let myCountry = Object();

myCountry.country = "The Ivory Coast";
myCountry.capital = "Yamoussoukro";
myCountry.language = "Bambara";
myCountry.population = "26378274";
myCountry.neighbours = ["Liberia", "Guinea", "Mali", "Burkina Faso", "Ghana"];

myCountry.describe = function () {
    console.log(
        `${this.country} has ${this.population} people, their mother tongue is ${this.language}, they have ${this.neighbours.length} neightbouring countries and a vapital called ${this.capital}`
    );
};

myCountry.checkIsland = function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
};

myCountry.describe();

myCountry.checkIsland();
console.log(myCountry.isIsland);
