//importing the middle.js and assertArraysEqual.js file from the directory. To allow usage of middle function and assertArraysEquals
const middle = require('../middle');
const assertArraysEquals = require('../assertArraysEqual');

// TEST CODE
//console.log(assertArraysEquals([1],middle([1])));
console.log(middle([1]));
console.log(middle([1,2]));
console.log(middle([1,2,3]));
console.log(middle([1,2,3,4]));
console.log(middle([1,2,3,4,5,6,7,8,9]));
console.log(middle([1,2,3,4,5,6,7,8]));