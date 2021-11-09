const isLeapYear = (year) => {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
        return true;
    }
    return false;
};

if (isLeapYear(2000)) {
    console.log("2000 was a leap year");
} else {
    console.log("2000 was not a leap year");
}

if (isLeapYear(2012)) {
    console.log("2000 was a leap year");
} else {
    console.log("2000 was not a leap year");
}

if (isLeapYear(2100)) {
    console.log("2100 was a leap year");
} else {
    console.log("2100 was not a leap year");
}
