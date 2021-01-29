/* Source: https://edabit.com/challenge/4aaBNPnFMc3bzR7JR */

//Write a function that converts an object into an array of keys and values.

// Examples

// objectToArray({
//   D: 1,
//   B: 2,
//   C: 3
// }) ➞ [["D", 1], ["B", 2], ["C", 3]]

// objectToArray({
//   likes: 2,
//   dislikes: 3,
//   followers: 10
// }) ➞ [["likes", 2], ["dislikes", 3], ["followers", 10]]

function arrayToObjects (object) {
  let result = [];
  let subArray = [];
  //iterate over the properties in the input object
  for (let key in object) {
    //push key to subArray
    subArray.push(key);
    //push value to subArray
    subArray.push(object[key]);
    //push subArray to result
    result.push(subArray);
    //reset subArray
    subArray = [];
  }

  return result;
}

function assertObjectEquals(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log ('test passed')
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`)
  }

}

let data = {
  D: 1,
  B: 2,
  C: 3
}

let actual = arrayToObjects(data);
let expected = [["D", 1], ["B", 2], ["C", 3]];

console.log ( assertObjectEquals(actual, expected, 'object to array') )