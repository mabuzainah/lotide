//importing the middle.js and assertArraysEqual.js file from the directory. To allow usage of middle function and assertArraysEquals
const middle = require('../middle');
const assert = require('chai').assert;


// test code using Mocha-Chai

describe("#middle", () => {
    it("returns [] for [1]", () => {
        assert.deepEqual(middle([1]), []);
    });
    it("returns 2 for [1,2,3]", () => {
      assert.deepEqual(middle([1,2,3]), [ 2 ]);
    });
    it("returns [] for [1,2]", () => {
        assert.deepEqual(middle([1,2]), []);
    });
    it("returns [ 2, 3] for [1,2,3,4]", () => {
        assert.deepEqual(middle([1,2,3,4]), [ 2, 3 ]);
    });
    it("returns 5 for [1,2,3,4,5,6,7,8,9]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6,7,8,9]), [ 5 ]);
    });
    it("returns [ 4, 5 ] for [1,2,3,4,5,6,7,8]", () => {
        assert.deepEqual(middle([1,2,3,4,5,6,7,8]), [ 4 , 5 ]);
    });  
  });