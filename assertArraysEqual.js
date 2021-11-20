//importing the eqArrays function from eqArrays.js
const eqArrays = require('./eqArrays');

const assertArraysEquals = function (arr1, arr2){
    if (eqArrays (arr1,arr2)){
        console.log("Assertion Passed: " + arr1 + " === " + arr2);
    } else {
        return console.log("Assertion Failed: " + arr1 + " !== " + arr2);
    }
};

//exporting the file so it can be used in other js files.
module.exports = assertArraysEquals;