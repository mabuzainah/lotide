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
    if ((arr1 !== undefined) && (arr2 !== undefined)){
        eqArrays (arr1,arr2);
    } else {
        return undefined;
    }
}

// ACTUAL FUNCTION
const middle = function(array) {
    /*For arrays with one or two elements, there is no middle. Return 
    an empty array. For arrays with odd number of elements,
    an array containing a single middle element should be returned.
    For arrays with an even number of elements, an array 
    containing the two elements in the middle should be returned.
    */
    
  const blankArr = [];
  if (array.length < 3){
      return blankArr;
  }  
  if (array.length % 2 === 1){
      return [array[Math.floor(array.length / 2)]];
  } else {
    return [array[(array.length / 2) - 1], array[array.length / 2]];
  }
  
}


//console.log(assertArraysEquals([1],middle([1])));
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9]));
console.log(middle([1,2,3,4,5,6,7,8]));

//exporting the file so it can be used in other js files.
module.exports = middle;