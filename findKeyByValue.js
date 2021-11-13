const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};

/*
Function that takes in an Object and a Value as parameter. It should 
scan the object and return the first key which contains the 
given value. If no key with that given value is found, then it should 
return undefined.
*/

const findKeyByValue = function (obj, val){
   
    //attempting to iterate through the object by key,
    for (var showGenre of Object.keys(obj)) {
        //console.log(obj[showGenre]);
        //checking if the value of the key matches what we're attempting to check as a value
        if (val === obj[showGenre]){
           //var showName = obj[showGenre];
           //console.log(showGenre);
           //return the Genre in question
           return showGenre;
        } 
    }
    return undefined; 

};
//TESTING TO SEE IF FUNCTION findKeyByValue(param1, param2) works

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};

//findKeyByValue(bestTVShowsByGenre, "The Wire")  
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);