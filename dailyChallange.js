let pets = [
    {
        name: "Rex",
        age: 4,
        ownerName: "Luke"
    }, {
        name: "Spot",
        age: 7,
        ownerName: "Jade"
    }, {
        name: "Scooby",
        age: 3,
        ownerName: "Shaggy"
    }, {
        name: "Lucky",
        age: 1,
        ownerName: "Luke"
    }, {
        name: "Sadie",
        age: 3,
        ownerName: "Daniel"
    }, {
        name: "Duke",
        age: 5,
        ownerName: "Sabine"
    }
];

// 1 Use the Array.filter function to create an array of all the pets owned by Luke.

 const ownedByLukepet=>pet.ownerName == "Luke";


let lukesPets = pets.filter(ownedByLuke);
// console.log(lukesPets);

// 2 Use the Array.map function to create an array of all the names of the owners.

const getOwner pet => pet.ownerName;
}
let owners = pets.map(getOwner);

// console.log(owners);

// 3 Use the Array.find function to retrieve the pet owned by Shaggy
const findShaggysPet pet=> pet.ownerName == "Shaggy";


let shaggysPet = pets.find(findShaggysPet);
console.log(shaggysPet);

// 4 Use the Array.filter function to create an array of all the pets that are less than 5 years old and that have either a pet or owner name that starts with "S"

const filterCallback=pet=>{
    let lessThan5 = pet.age < 5;
    let hasS = pet.name[0] == "S" || pet.ownerName[0] == "S";
    return lessThan5 && hasS;
}

const filterCallback = pet => pet.age<5&&(pet.name[0]==

let filteredPets = pets.filter(filterCallback);
console.log(filteredPets);



let sentence = "The quick brown fox jumps over the lazy dog.";

// 1 Write function that searches for a string inside the sentence above. The function should return true if the string is found or false otherwise
function searchInSentence(searchTerm) {
    return sentence.includes(searchTerm);
}
// console.log(searchInSentence("dog"));
// console.log(searchInSentence("program"));

// 2 Write function that searches for a string inside the sentence above. The function should return the index of the first occurrence of the string if the string is found or -1 otherwise
function findIndexInSentence(searchTerm) {
    return sentence.indexOf(searchTerm);
}
// console.log(findIndexInSentence("dog"));
// console.log(findIndexInSentence("program"));

// 3 Write a function that takes a string and returns the first three characters of that string
function firstThreeChars(myString) {
    return myString.substring(0, 3);
}
// console.log(firstThreeChars(sentence));

// 4 Write a function that takes a string and returns the last two characters of that string
function lastTwoChars(myString) {
    return myString.substring(myString.length - 2);
}
// console.log(lastTwoChars(sentence)); // Outputs "g."
// console.log(lastTwoChars("Luke")); // Outputs "ke"

// 5 Write a function that converts a string into an array of words where a word is any string separated by a space.
function stringToArray(myString) {
    return myString.split(" ");
}
// console.log(stringToArray(sentence));

// 6 Write a function that counts the number of times a string appears inside the sentence string above
function countOccurrences(searchTerm) {
    let count = 0;
    let startIndex = 0;
    while (true) {
        let index = sentence.indexOf(searchTerm, startIndex);
        if (index == -1) {
            break;
        }
        count++;
        startIndex = index + 1;
    }
    return count;
}
// console.log(countOccurrences("the"));


// RegEx

const EMAIL_REGEX = /(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i;
const URL_REGEX = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

// 1 Write a function that determines if a string contains a valid email address

//RegExp.test(string)
function testStringContainsEmail(testString){
    return EMAIL_REGEX.test(testString);
}
console.log(testStringContainsEmail("My Name Is Luke and My Email is: luke.parker9@tafensw.edu.au"));


// 2 Write a function to find the index of the first character of a valid URL in a given string

// String.search(regEx)
function findIndexOfValidURL(testString) {
    return testString.search(URL_REGEX);
}
console.log(findIndexOfValidURL("Go To https://learn.sydneytafe.edu.au/ to learn more"));