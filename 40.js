/*
find a duplicate, Space edition
It follows that our array has at least one integer which appears at least twice. 
But it may have several duplicates, and each duplicate may appear more than twice.
write a function which finds any integer that appears more than once in our array

Approach 1:
-create a hash 
-itegerate through the hash at the end return values that are greater than 1
space: O(n + m), time: O(n)

Approach 2:
-sort the array
-return values that don't repeat
time: O(n), space O(m)
*/

//We have an array of integers, where:

//The integers are in the range 1..n1..n
//The array has a length of n+1n+1
//It follows that our array has at least one integer which appears at least twice. But it may have several duplicates, and each duplicate may appear more than twice.

//Write a function which finds an integer that appears more than once in our array. (If there are multiple duplicates, you only need to find one of them.)
//Optimize for space

//SOLUTION:

// 1. Find the number of integers in our
// input array which lie within the
// range 1..(n/2).

// 2. Compare that to the number of possible
// unique integers in the same range.

// 3. If the number of actual integers
// is greater than the number of possible
// integers, we know there's a duplicate
// in the range 1..(n/2), so we iteratively,
// use the same approach on that range.

// 4. If the number of actual integers is not
// greater than the number of possible integers,
// we know there must be duplicate in the range
// (n/2) + 1..n, so we iteratively use the same
// approach on that range.

// 5. At some point our range will contain just
// 1 integer, which will be our answer.

 function findRepeat(theArray) {
    var floor = 1;
    var ceiling = theArray.length - 1;

    while (floor < ceiling) {
      //divide our range 1..n into an upper
      //range and lower range (such that they
      // don't overlap)
      //lower range is floor..midpoint
      //upper range is midpoint+1..ceiling
      var midpoint = Math.floor(floor + ((ceiling - floor) / 2));
      var lowerRangeFloor = floor;
      var lowerRangeCeiling = midpoint;
      var upperRangeFloor = midpoint + 1;
      var upperRangeCeiling = ceiling;

      var distinctPossibleIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;
      console.log(lowerRangeFloor, lowerRangeCeiling, upperRangeFloor, upperRangeCeiling)
      console.log('DPILR', distinctPossibleIntegersInLowerRange)
      //count number of items in lower range
      var itemsInLowerRange = 0;
      theArray.forEach((item) => {
        // is it in the lower range?
       	// console.log('item', item)
        if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        	console.log('first if', item)
          itemsInLowerRange += 1;
        }
      });

      if (itemsInLowerRange > distinctPossibleIntegersInLowerRange) {
      		console.log('second if', itemsInLowerRange, distinctPossibleIntegersInLowerRange)
        // there must be a duplicate in the lower range
        // so use the same approach iteratively on that range
        floor = lowerRangeFloor;
        ceiling = lowerRangeCeiling;
        console.log('floor and ceiling', floor, ceiling)
      } else {
        // there must be a duplicate in the upper range
        // so use the same approach iteratively on that range
        console.log('else')
        floor = upperRangeFloor;
        ceiling = upperRangeCeiling;
      }
    }
    //floor and ceiling have converged
    // we found a number that repeats!
    return floor;
 }

//COMPLEXITY: O(1) space and O(n lg n) time
//This was a modified binary search, we got there by reasoning
// about the expected runtime:
//1. started with an O(n^2) brute force solution and wondered
//if we can do better
//2. we knew to beat O(n^2) we'd probably do O(n) or O(n lg n),
// so we started thinking of ways we might get an O(n lg n) runtime
//3. lg n usualy comes from iteratively cutting stuff in half,
// so we arrived at the final algorithm by exploring that idea

// Starting with a target runtime and working backwards from there
//can be a powerful strategy for all kinds of coding interview
//questions.

console.log(findRepeat([3, 2, 4, 6, 2, 1, 4]))
