const steps = (num) => {
    for (let i = 1; i <= num; i++) {
        let step = "";
        for (let j = 1; j <= i; j++) {
            step += "#";
        }
        for (let j = i + 1; j <= num; j++) {
            step += " ";
        }
        console.log(`'${step}'`);
    }
};

steps(44);
