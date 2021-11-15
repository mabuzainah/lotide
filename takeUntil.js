/*
We will be implementing a function quite similar to this one, 
but isn't present in their library: takeUntil.

It will take in two parameters as well:
    The array to work with
    The callback (which Lodash calls "predicate")
*/

const takeUntil = function(array, callback) {
    // ...
    const result = [];
    for (let item of array) {
        //result.push(callback(item));
        if (callback(item)=== false){
            result.push(item);
        }
        if (callback(item)===true){
            return result;
        }
    }
    return result;
}

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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);