/*
Given an array_of_ints, find the highest_product you can get from three integers
[1, 10, -5, 1, -100]
 ^          ^
highest = 10
lowest = -100
highestOfTwo = 10
lowestOfTwo = -50
highestOfThree = -50
*/

function highestProductOfThree(arr) {
  let highest = Math.max(arr[0], arr[1]);
  let lowest = Math.min(arr[0], arr[1]);
  let highestOfTwo = highest * lowest;
  let lowestOfTwo = highest * lowest;
  let highestOfThree = 0;
  for(let i = 2; i < arr.length; i++) {
    highestOfThree = Math.max(highestOfTwo * arr[i], lowestOfTwo * arr[i], highestOfThree);
    let currProduct = arr[i] * highest;
    if (currProduct > highestOfTwo) {
      highestOfTwo = currProduct;
    } else if (currProduct < lowestOfTwo) {
      lowestOfTwo = currProduct
    }
  }
  return highestOfThree;
}


console.log(highestProductOfThree([1, 10, -5, 1, -100]))