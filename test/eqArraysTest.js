//allows the import of the functions asserEqual and eqArrays from their respective JS files
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// TEST CODE
assertEqual(1,3);
assertEqual("Bootcamp","Bootcamp");
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,6]),true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,6]),false);
assertEqual(eqArrays([1, 2, 'a'], [1, 2, 3,6]),false);
assertEqual(eqArrays(['a','b','c'], [1, 2, 3,6]),false);
