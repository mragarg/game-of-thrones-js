// Comment out the const characters line if you want it to work in the browser
const characters = require("./characters");

console.log(`There are ${characters.length} characters in the array.`);

// nameA function returns the count of  character names that start with A
function nameA(array) {
    let count = 0;
    array.forEach(function (character) {
        if(character.name[0] == "A"){
            count++;
        }
    })
    return count;
}

// console.log(nameA(characters));

// nameZ function returns the count of  character names that start with Z
function nameZ(array) {
    let count = 0;
    array.forEach(function (character) {
        if(character.name[0] == "Z"){
            count++;
        }
    })
    return count;
}

// console.log(nameZ(characters));

// numberDead function returns the number of dead characters
function numberDead(array) {
    let count = 0;
    array.forEach(function (character) {
        if(character.died.length > 0){
            count++;
        }
    })
    return count;
}

// console.log(numberDead(characters));

// mostTitles function returns the character name with the most titles
function mostTitles(array) {
    let maxTitles = 0;
    let titleName;
    array.forEach(function (character) {
        if(character.titles.length >= maxTitles){
            maxTitles = character.titles.length;
            titleName = character.name;
        }
    })
    return `The most titles is ${maxTitles} and belongs to ${titleName}`;
}

// console.log(mostTitles(characters));