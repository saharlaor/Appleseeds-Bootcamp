let obj1 = { name: "Sahar" };
let obj2 = { name: "Pini" };
let obj3 = { name: "Mordi" };

let map = new Map();
map.set(1, obj1);
map.set(2, obj2);
map.set(3, obj3);

for (const i of map) {
    console.log(i[0], i[1]["name"]);
}
