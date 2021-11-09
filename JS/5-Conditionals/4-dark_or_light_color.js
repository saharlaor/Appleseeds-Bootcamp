function stringColor(color) {
    switch (color) {
        case "yellow":
        case "Yellow":
        case "pink":
        case "Pink":
        case "orange":
        case "Orange":
            return "light color";
        case "blue":
        case "Blue":
        case "purple":
        case "Purple":
        case "brown":
        case "Brown":
            return "dark color";
        default:
            return "Unknown color";
            break;
    }
}

console.log(stringColor("white"));
console.log(stringColor("blue"));
console.log(stringColor("Yellow"));
console.log(stringColor("2"));
console.log(stringColor("Brown"));
