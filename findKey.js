//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

const result = [];

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};


const findKey = function (objectArr, callback){
    // implement the code

    for (let val1 of Object.keys(objectArr)){
        // now that we've accessed the element of the object 
        // we can check using the callback function if the value
        // of the key matches what is being passed to the callback
        // function
        if (callback(objectArr[val1])){
            return val1;
        }
    } 
    return undefined; // returning undefined if we can't find a match
};

console.log(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2)); // => "noma"


console.log(assertEqual(,noma));
