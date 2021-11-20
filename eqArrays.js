//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)
// to be able to use assertEqual function from assertEqual file
const assertEqual = require('./assertEqual');

// FUNCTION IMPLEMENTATION to compare whether two arrays contents are the same
const eqArrays = function (array1, array2){
    if (array1.length !== array2.length){
        return false;
    } else {
        //array1.every((v, i) => v === array2[i])
        for (var i=0; i<array1.length; i++){
            if (array1[i]===array2[i]){
                return true;
            } return false;
        }
    }
};

//allowing to export the eqArrays function to be used in other folders.
module.exports = eqArrays;