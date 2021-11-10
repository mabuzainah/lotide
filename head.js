//Emoji code
const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(1,3);
assertEqual("Bootcamp","Bootcamp");


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

//TEST CODE

console.log(head([7,9,0,-2]));
console.log(head([9,10,15,20,35]));
console.log(head([]));
console.log(head());
console.log(head(["apple","banana","hear",3]));


// TEST CODE FOR SEEING IF WORKS WHEN PASSING THE HEAD FUNCTION AS PARAMETER FOR assertEqual:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");