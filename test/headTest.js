const assertEqual = require('../assertEqual');
const head = require('../head');

//TEST CODE

//console.log(head([7,9,0,-2]));
//console.log(head([9,10,15,20,35]));
//console.log(head([]));
//console.log(head());
//console.log(head(["apple","banana","hear",3]));


// TEST CODE FOR SEEING IF WORKS WHEN PASSING THE HEAD FUNCTION AS PARAMETER FOR assertEqual:
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");