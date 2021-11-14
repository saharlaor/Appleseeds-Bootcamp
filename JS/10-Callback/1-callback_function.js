const isString = (str, callback) => {
    if (typeof str === typeof String()) {
        callback(str);
    }
};

const logStr = (str) => {
    console.log(str);
};

const firstWordUpperCase = (str, callback) => {
    return callback(str[0].toUpperCase() + str.slice(1));
};

const myFunc = (a, b, callback) => {
    return callback(
        firstWordUpperCase(a, (a) => a),
        firstWordUpperCase(b, (b) => b.split("").reverse().join(""))
    );
};

// Tests
isString("asdf", logStr); // output: asdf
isString(2, logStr); // nothing

console.log(
    firstWordUpperCase("asdf fa rewagf", (str) => str.split(" ").join("-"))
);

console.log(firstWordUpperCase("asdf fa rewagf ", (str) => str.repeat(6)));

console.log(
    myFunc(
        "Click boom and it happened",
        "no one else was in the room where it happened",
        (a, b) => {
            let c = "";
            for (let i = 0; i < Math.max(a.length, b.length); i++) {
                if (a[i]) {
                    c += a[i];
                }
                if (b[i]) {
                    c += b[i];
                }
            }
            return c;
        }
    )
);
