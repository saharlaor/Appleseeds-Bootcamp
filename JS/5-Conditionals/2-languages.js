function languageFact(language) {
    switch (language) {
        case "Mandarin":
        case "mandarin":
            console.log("mandarin: MOST number of native speakers!");
            break;
        case "Spanish":
        case "spanish":
            console.log("spanish: 2nd place in the number of native speakers!");
            break;
        case "English":
        case "english":
            console.log("english: 3rd place");
            break;
        case "Hindi":
        case "hindi":
            console.log("hindi: Number 4");
            break;
        case "Arabic":
        case "arabic":
            console.log("arabic: 5th most spoken language");
            break;

        default:
            console.log(language + " Not in the top 5");
            break;
    }
}

languageFact("Hebrew"); // Hebrew Not in the top 5
languageFact("English"); // english: 3rd place
languageFact("Finnish"); // Finnish not in the top 5
languageFact("French"); // French not in the top 5
languageFact("Hindi"); // hindi: Number 4
