function getToday() {
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    let today = new Date();

    console.log(
        `Today is ${days[today.getDay()]} the ${today.getDate()} of ${
            months[today.getMonth()]
        }, ${today.getFullYear()}`
    );
}
