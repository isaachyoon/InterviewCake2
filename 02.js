/*
You have an array of integers, and for each index you want to find the product
of every integer except the integer at that index.

ex. [1, 7, 3, 4] => [84, 12, 28,21]

[1, 7, 3, 4]
 ^
          ^
[1, 1, 7, 21]
[84, 12, 4, 4]
*/

/*
  time complexity: O(n^2)
  space complexity: O(n)
*/
function arrayProductNaive(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let currProduct = 1;
    for (let j = 0; j < arr.length; j++) {
      if(i === j) {
        continue;
      }
      currProduct *= arr[j];
    }
    res.push(currProduct);
  }
  return res;
}

console.log(arrayProductNaive([1, 7, 3, 4]));


/*
  Time complexity: O(n)
  Space complexity: O(n)
*/
function arrayProduct(arr) {
  let res = [];
  let accProd = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(i === 0) {
      res.push(arr[i]);
      continue;
    }
    accProd *= arr[i-1];
    res.push(accProd); //[1, 1, 7, 21]
  }
  accProd = arr[arr.length - 1];
  for(let j = arr.length - 1; j >= 0; j--) {
    if(j === arr.length - 1) {
      continue;
    }
    res[j] *= accProd;
    accProd *= arr[j];
  }
  return res;
}

console.log(arrayProduct([1, 7, 3, 4]));

