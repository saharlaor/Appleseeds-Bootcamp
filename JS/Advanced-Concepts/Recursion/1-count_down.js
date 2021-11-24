function countDown(number) {
    for (let i = number; i > 0; i--) {
        console.log(i);
    }
}

function countDownRecurse(number) {
    if (number <= 0) {
        return (number + 1).toString();
    }
    let decendingNumbers = countDownRecurse(number - 1);
    console.log(decendingNumbers);
    return `${number + 1}, ${decendingNumbers}`;
}

countDown(5);
countDownRecurse(5);
