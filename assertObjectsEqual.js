//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

const eqObjects = function(object1, object2) {
    let valueToBeReturned = true; 
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
   for(val1 of Object.keys(object1)){
       for (val2 of Object.keys(object2)){
           if (Array.isArray(val1) && Array.isArray(val2)){
               valueToBeReturned = eqArrays(val1,val2);
           } else {
               if (val1 === val2){
                   valueToBeReturned = true;
               } else {
                   valueToBeReturned = false;
               }
           }
           //if (val1 === val2){
           //    valueToBeReturned = true;
           // } else {
           //     valueToBeReturned = false;
           // }
        }
    return valueToBeReturned;  //returning the value on whether the item in object2 matches that of object1
    }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
    const inspect = require('util').inspect; // <= add this line
    // IMPLEMENT ME! ...
    if (eqObjects(actual,expected)){
        return console.log(wave,wave,wave,`Assertion Passed: ${inspect(actual)}` + " === " + `${inspect(expected)}`);
    } else {
        return console.log(mad,mad,mad,`Assertion Failed: ${inspect(actual)}` + " !== " + `${inspect(expected)}`);
    }
};
//

/*
// copy of assertArraysEquals for reference
const assertArraysEquals = function (arr1, arr2){
    if (eqArrays (arr1,arr2)){
        console.log("Assertion Passed: " + arr1 + " === " + arr2);
    } else {
        return console.log("Assertion Failed: " + arr1 + " !== " + arr2);
    }
};

*/

//console.log(`Example label: ${inspect(actual)}`);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); //true