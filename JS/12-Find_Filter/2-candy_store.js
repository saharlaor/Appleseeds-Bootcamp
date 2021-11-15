const candyStore = {
    candies: [
        {
            name: "mint gum",
            id: "as12f",
            price: 2,
            amount: 2,
        },
        {
            name: "twix",
            id: "5hd7y",
            price: 5,
            amount: 4,
        },
    ],
    cashRegister: 200,
};

function getCandy(candyStore, id) {
    return candyStore.candies.find((candy) => candy.id === id);
}

function getPrice(candyStore, id) {
    return getCandy(candyStore, id).price;
}

function addCandy(candyStore, id, name, price) {
    let candy = getCandy(candyStore, id);
    candy
        ? candyStore.candies[candyStore.candies.indexOf(candy)].amount++
        : candyStore.candies.push({
              name: name,
              id: id,
              price: price,
              amount: 1,
          });
}

function buy(candyStore, id) {
    let candy = getCandy(candyStore, id);
    let candyIndex = candyStore.candies.indexOf(candy);
    candyStore.cashRegister += getPrice(candyStore, id);
    candyStore.candies[candyIndex].amount--;
    if (!candyStore.candies[candyIndex].amount) {
        candyStore.candies.splice(candyIndex, 1);
    }
}

// Tests
console.log(getCandy(candyStore, "5hd7y")); // { name: 'twix', id: '5hd7y', price: 5, amount: 4 }
console.log(getPrice(candyStore, "5hd7y")); // 5

addCandy(candyStore, "1337a", "fireworks", 4);
console.log(getCandy(candyStore, "1337a")); // { name: 'fireworks', id: '1337a', price: 4, amount: 1 }
buy(candyStore, "1337a");
console.log(getCandy(candyStore, "1337a")); // undefined
buy(candyStore, "5hd7y");
console.log(getCandy(candyStore, "5hd7y")); // { name: 'twix', id: '5hd7y', price: 5, amount: 3 }
console.log(candyStore.cashRegister); // 209
