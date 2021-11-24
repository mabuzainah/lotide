// index.js
const head   = require('./head');
const middle = require('./middle');
const eqArrays = require('./eqArrays');
const assertArraysEquals = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');

module.exports = {
  head:   head,
  middle: middle,
  eqArrays: eqArrays,
  assertArraysEquals: assertArraysEquals,
  assertEqual: assertEqual
};