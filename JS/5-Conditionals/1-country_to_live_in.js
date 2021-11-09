function countryToLiveIn(language, isIsland, population, country) {
    if (language === "English" && !isIsland && population < 50000000) {
        console.log("You should live in " + country);
    } else {
        console.log(country + " does not meet the criteria");
    }
}

countryToLiveIn("Finnish", false, 5528737, "Finland");
countryToLiveIn("English", false, 37894799, "Canada");
