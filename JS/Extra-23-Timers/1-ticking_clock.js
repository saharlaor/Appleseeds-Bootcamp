setInterval(() => {
    console.clear();
    let dateTime = new Date();
    let formatTime = [
        dateTime.getHours(),
        dateTime.getMinutes(),
        dateTime.getSeconds(),
    ]
        .map((val) => val.toString().padStart(2, "0"))
        .join(":");
    console.log(formatTime);
}, 1000);
