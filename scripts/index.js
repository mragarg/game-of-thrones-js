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

// countVal function returns the number of people that are Valyrians
function countVal(array) {
    let count = 0;
    array.forEach(function (character) {
        if(character.culture == "Valyrian"){
            count++;
        }
    })
    return count;
}

// console.log(countVal(characters));

// playHotPie function returns the actor name that plays HotPie
function playHotPie(array) {
    let hotPie;
    array.forEach(function (character) {
        if(character.name == "Hot Pie"){
            hotPie = character.playedBy;
        }
    })
    return hotPie;
}

// console.log(playHotPie(characters));

// noTVDeal function returns the number of characters that were in the book but NOT in the TVShow
function noTVDeal(array) {
    let count = 0;
    array.forEach(function (character) {
        if(character.tvSeries.length < 2){
            count++;
        }
    })
    return count;
}

// console.log(noTVDeal(characters));

// lastnameTar functions returns an array of charcaters with the last name Targaryen
function lastnameTar(array) {
    let result = array.filter(function (character){
        return character.name.includes("Targaryen");
    })
    result = result.map(function (character){
        return character.name;
    })
    return result;
    
}

console.log(lastnameTar(characters));