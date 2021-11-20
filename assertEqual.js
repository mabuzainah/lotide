//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};
//exporting the file so it can be used in other js files.
module.exports = assertEqual;