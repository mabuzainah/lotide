const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)
// FUNCTION IMPLEMENTATION
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
        //array1.every((v, i) => v === array2[i])
        for (var i=0; i<array1.length; i++){
            if (array1[i]===array2[i]){
                return true;
            } return false;
        }
    }
};


// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

/*
Function not working as intended - with help of @Nordicebear, was able to be provided next step to resolve this matter. 




const eqObjects = function(object1, object2) {
    
    if (Object.keys(object1).length !== Object.keys(object2).length){
        return false;
    } else{
    for (var keyz of Object.keys(object1)) {
        if ((object1[keyz]) === object2[keyz]){
            return true;
        } return false;
    }
    return true; 
   }
   
    
};

*/

const eqObjects4 = function(object1, object2) {
    let valueToBeReturned = true; 
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
   for(val1 of Object.keys(object1)){
       for (val2 of Object.keys(object2)){
           if (val1 === val2){
               valueToBeReturned = true;
            } else {
                valueToBeReturned = false;
            }
        }
    return valueToBeReturned;  //returning the value on whether the item in object2 matches that of object1
    }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
//console.log(eqObjects4(ab, ba)); // => true
assertEqual(eqObjects4(ab, ba),true);

const abc = { a: "1", b: "2", c: "3" };
//console.log(eqObjects4(ab, abc)); // => false
assertEqual(eqObjects4(ab, abc),false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
//console.log(eqObjects4(cd, dc)); // => true
assertEqual(eqObjects4(cd, dc),true);

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects4(cd, cd2)); // => false
assertEqual(eqObjects4(cd, cd2),false);
