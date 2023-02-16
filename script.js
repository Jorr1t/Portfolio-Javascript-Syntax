const names = ["Harry", "John", "Lisa", "Linda"];
const ages = [35, 26, 74, 56];
const places = ["New York", "London", "Tokyo", "Paris"];

function selector() {
    let number = 0
    number = Math.floor(Math.random() * 4);
    return number
}

 function displayMessage() {
    let name = names[selector()];
    let age = ages[selector()];
    let place = places[selector()];
    let it;
    if (name === "Harry" || name === "John") {
        it = "he"
    } else {
        it = "she"
    }
    console.log(`${name} is ${age} years of age and ${it} lives in ${place}`)
 }

displayMessage()