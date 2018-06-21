/*
  [10, 30, 50, 20, 70]
  //keep track of the lowest
  //keep track of the highest difference
*/

function greatestProfit(arr) {
  let lowestValIndex = 0;
  let highestDifference = 0;

  for(let currIndex = 0; currIndex < arr.length; currIndex++) {
    let difference = arr[currIndex] - arr[lowestValIndex];
    if(difference > highestDifference) {
      highestDifference = difference;
    }
    if(arr[currIndex] < arr[lowestValIndex]) {
      lowestValIndex = currIndex;
    }
  }
  return highestDifference;
}

console.log(greatestProfit([70, 70, 70, 70, 60]))
