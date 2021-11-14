const steps = (num) => {
    // for (let i = 1; i <= num; i++) {
    //     let step = "";
    //     for (let j = 1; j <= i; j++) {
    //         step += "#";
    //     }
    //     for (let j = i + 1; j <= num; j++) {
    //         step += " ";
    //     }
    //     console.log(`'${step}'`);
    // }
    let step = new Array(num).fill(" ");
    for (let i = 0; step.indexOf(" ") !== -1; i++) {
        step[step.indexOf(" ")] = "#";
        console.log(`'${step.join("")}'`);
    }
};

steps(4);
