const data = [
    {
        name: "John",
        birthday: "1-1-1995",
        favoriteFoods: {
            meats: ["hamburgers", "sausages"],
            fish: ["salmon", "pike"],
        },
    },
    {
        name: "Mark",
        birthday: "10-5-1980",
        favoriteFoods: {
            meats: ["hamburgers", "steak", "lamb"],
            fish: ["tuna", "salmon", "barracuda"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["ham", "chicken"],
            fish: ["pike"],
        },
    },
    {
        name: "Thomas",
        birthday: "1-10-1990",
        favoriteFoods: {
            meats: ["bird", "rooster"],
            fish: ["salmon"],
        },
    },
    {
        name: "Mary",
        birthday: "1-10-1977",
        favoriteFoods: {
            meats: ["hamburgers", "lamb"],
            fish: ["anchovies", "tuna"],
        },
    },
];

const getAllNames = (arr) => {
    return arr.map((obj) => obj.name);
};

const getOlderData = (arr) => {
    const older = [];
    arr.forEach((person) => {
        if (Number(person.birthday.split("-")[2]) < 1990) {
            older.push(person);
        }
    });
    return older;
};

const getFoods = (arr) => {
    const foodObj = {};
    arr.forEach((person) => {
        Object.values(person.favoriteFoods)
            .join(",")
            .split(",")
            .forEach((food) => {
                foodObj[food] = foodObj[food] ? foodObj[food] + 1 : 1;
            });
    });
    return foodObj;
};

// Tests
console.log(getAllNames(data));
console.log(getOlderData(data));
console.log(getFoods(data));
