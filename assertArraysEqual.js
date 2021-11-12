const eqArrays = function (array1, array2){
    if (array1.length !== array2.length){
        return false;
    } else {
        for (var i=0; i<array1.length; i++){
            if (array1[i]===array2[i]){
                return true;
            } return false;
        }
    }
};

const assertArraysEquals = function (arr1, arr2){
    if (eqArrays (arr1,arr2)){
        console.log("Assertion Passed: " + arr1 + " === " + arr2);
    } else {
        return console.log("Assertion Failed: " + arr1 + " !== " + arr2);
    }
};
/*
console.log(assertArraysEquals("1,2,3","1,2,3"));
console.log(assertArraysEquals("1,2,3,4","1,2,3"));
*/