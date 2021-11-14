const eqObjects = function(object1, object2) {
    let valueToBeReturned = true; 
    if (Object.keys(object1).length !== Object.keys(object2).length) {
        return false;
    }
   for(val1 of Object.keys(object1)){
       for (val2 of Object.keys(object2)){
           if (Array.isArray(val1) && Array.isArray(val2)){
               eqArrays(val1,val2);
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

};


console.log(`Example label: ${inspect(actual)}`);