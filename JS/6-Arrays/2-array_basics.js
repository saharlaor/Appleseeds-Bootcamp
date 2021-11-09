const people = ["Greg", "Mary", "Devon", "James"];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

// Remove Greg
people.shift();
// Remove James
people.pop();
// Add Matt at the start
people.unshift("Matt");
// Add myself to the end
people.push("Sahar");

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
    if (people[i] === "Mary") {
        break;
    }
}

let peopleCopy = people.slice(2);

console.log(people.indexOf("Mary"));
console.log(people.indexOf("Foo"));

people.splice(0, people.length, "Greg", "Mary", "Devon", "James");
people.splice(2, 1, "Elizabeth", "Artie");

let withBob = people.concat("Bob");
