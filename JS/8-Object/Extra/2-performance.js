let obj1 = { name: "Sahar" };
let obj2 = { name: "Pini" };
let obj3 = { name: "Mordi" };

let map = new Map();
map.set(obj1, 1);
map.set(obj2, 2);
map.set(obj3, 3);

for (const i of map) {
    console.log(i[0]["name"], i[1]);
}
