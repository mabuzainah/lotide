//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

// FUNCTION IMPLEMENTATION checking if two values are the same
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};

// FUNCTION IMPLEMENTATION to compare whether two arrays contents are the same
const eqArrays = function (array1, array2){
    if (array1.length !== array2.length){
        return false;
    } else {
        array1.every((v, i) => v === array2[i])
    }
};

// TEST CODE
assertEqual(1,3);
assertEqual("Bootcamp","Bootcamp");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,6]),true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,6]),false);
assertEqual(eqArrays([1, 2, 'a'], [1, 2, 3,6]),false);
assertEqual(eqArrays(['a','b','c'], [1, 2, 3,6]),false);
