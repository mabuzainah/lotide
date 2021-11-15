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
Our map function will take in two arguments:
    An array to map
    A callback function
The map function will return a new array based on the results of 
the callback function.
*/
const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
    // temporary code:
    //console.log('array: ', array);
    //console.log('callback: ', callback);  
    const results = [];
    for (let item of array) {
        //console.log('item BEFORE: ', item);
        //console.log('item AFTER: ', callback(item)); //passing the callback function named "callback"
        //console.log('---');
        results.push(callback(item));
    }
    return results;
}

const results1 = map(words, word => word[0]); 
// ^ the second parameter for map function is basically a function 
// such that it returns the first index or basically letter from
// each word.

console.log(results1);


