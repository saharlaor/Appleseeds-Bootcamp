function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
  this.pokemonName = pokemonName;
  this.pokemonType = pokemonType;
  this.pokemonAttackList = pokemonAttackList;
}

let pokemons = [
  new Pokemon("Kyogre", "water", [
    "Waterfall",
    "Hydro Pump",
    "Blizzard",
    "Thunder",
  ]),
  new Pokemon("Groudon", "Ground", [
    "Earthquake",
    "Eruption",
    "Solar Beam",
    "Dragon Tail",
  ]),
  new Pokemon("Rayquaza", "Dragon Flying", [
    " Air Slash",
    "Dragon Tail",
    "Outrage",
    "Aerial Ace",
    "Ancient Power",
  ]),
];

Pokemon.prototype.callPokemon = function () {
  console.log(`I choose you, ${this.pokemonName}`);
};

Pokemon.prototype.attack = function (attackNumber) {
  console.log(
    `${this.pokemonName} used ${this.pokemonAttackList[attackNumber]}`
  );
};

pokemons.forEach((poke, i) => {
  poke.callPokemon();
  poke.attack(i);
});
