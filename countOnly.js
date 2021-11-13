const mad = String.fromCodePoint(0x1F621);
const wave = String. fromCodePoint(0x1F44B)

// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
    if (actual===expected){
        return console.log(wave,wave,wave,"Assertion Passed: " + actual + " === " + expected);
    } else return console.log(mad,mad,mad,"Assertion Failed: " + actual + " !=== " + expected);
};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
    const results = {};

    // Add code to loop over all the items in the array and print them to the console.
    for (const item of allItems) {
        console.log(item);
        // inside the loop, increment the counter for each item:
        // set a property with that string key to:
        // the value that was already there (or zero if nothing there) with 1 added to it.
        if (itemsToCount[item]) {  //this line is to ensure that we only count the items we care about, and not everything in the array.
            if (results[item]) {
                results[item] += 1;
            } else {
                results[item] = 1;
            }
        }
    }

    return results;
   
}

//array containing firstNames
const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];
  
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
  assertEqual(result1["Jason"], 1);
  assertEqual(result1["Karima"], undefined);
  assertEqual(result1["Fang"], 2);
  assertEqual(result1["Agouhanna"], undefined);