const eqArrays = function (array1, array2){
    if (array1.length !== array2.length){
        return false;
    } else {
        array1.every((v, i) => v === array2[i])
    }
};


//  for reference ONLY!! Refer to assertEqual
//const assertEqual = function(actual, expected) {
//    if (actual===expected){
//        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
//    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
//};


const assertArraysEquals = function (arr1, arr2){
    if ((arr1 !== undefined) && (arr2 !== undefined)){
        eqArrays (arr1,arr2);
    } else {
        return undefined;
    }
}