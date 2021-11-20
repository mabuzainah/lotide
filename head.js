//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)
// import the file assertEqual.js to be able to use assertEqual function
const assertEqual = require('./assertEqual');

const head = function(array){
    if (array === undefined){
        return console.log("Array is undefined");
    } 
    if (array === null){
        return console.log("Array is undefined");
        //return void 0;
    }
    return array[0];
}

module.exports = head;
