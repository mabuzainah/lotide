const assertArraysEquals = function (arr1, arr2){
    if (eqArrays (arr1,arr2)){
        console.log("Assertion Passed: " + arr1 + " === " + arr2);
    } else {
        return console.log("Assertion Failed: " + arr1 + " !== " + arr2);
    }
};

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


const without = function (source, itemsToRemoveArray){
    return source.filter(function(ele){
        return ele!= itemsToRemoveArray;
    });
};

console.log(without([1, 2, 3], [1]));
console.log((["1", "2", "3"], [1, 2, "3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEquals(words, ["hello", "world", "lighthouse"]);