const boom = (n) => {
    for (let i = 1; i <= n; i += 1) {
        if (String(i).includes(7)) {
            if (i % 7 === 0) {
                console.log("BOOM-BOOM");
            } else {
                console.log("BOOM");
            }
        } else if (i % 7 === 0) {
            console.log("BOOM");
        } else {
            console.log(i);
        }
    }
};

boom(100);
