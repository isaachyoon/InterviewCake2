/*
Your company built an in-house calendar tool called HiCal. You want to add a feature to see the times in a day when everyone is available
*/

let testArr = [[0,1], [3,5], [4,8], [10,12], [9,10]];
let testArr2 = [[1,10], [2,6], [3,5], [7,9]];

function HiCal(arr) {
  let res = [];
  arr.sort((x,y) => x[0] - y[0]);
  var i = 0;
  while (arr[i+1] !== undefined) {
    if (arr[i][1] >= arr[i+1][0]) {
      if(arr[i][1] > arr[i+1][1]) {
        arr.splice(i+1, 1);
      } else {
        arr[i][1] = arr[i+1][1];
        console.log(arr[i])
        arr.splice(i+1, 1);
      }
    } else if (arr[i][1] < arr[i+1][0]) {
      i++;
    }
    console.log(arr)
  }
  return arr;
}

console.log(JSON.stringify(HiCal(testArr)));

/*
[[0,1], [3,5], [4,8], [10,12], [9,10]]
           ^      ^                    
 [0,1], [3,8]  [9,10] 

                              compare second number of the first array and second number of the second
                               if the first is greater, check with the second number of the second index
                                  if the first is greater, 
                                    then keep the first arr, and pop second, 
                                  if the second number is greater, 
                                    then [1st num from 1st array, 2nd num from 2nd array]
                                    and pop the second.
                               if the second is greater then keep the first array
                                  increment

*/

function combine(arr1, arr2) {
  return [arr1[0]]
}