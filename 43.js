//we have our list of orders sorted numerically already
//write a function to merge our arrays of order into one sorted arr

/*
	[3, 4, 6, 10, 11, 15]
	                   ^

	[1, 5, 8, 12, 14, 15, 19]
	       ^
	 ind1: 0
	 ind2: 0
	 res: [1, 3, 4, 5, 6, 8, 10, 11, 12, 14, 15 15]
*/

function mergeSortedArr(arr1, arr2) {
	let res = [];
	let ind1 = 0;
	let ind2 = 0;
	let totalSize = arr1.length + arr2.length;
	let counter = 0;
	while (counter < totalSize) {
		if (arr1[ind1] < arr2[ind2] || !arr2[ind2]) {
			res.push(arr1[ind1])
			ind1++;
		} else if (arr1[ind1] > arr2[ind2] || !arr1[ind1]) {
			res.push(arr2[ind2]);
			ind2++;
		} else {
			res.push(arr1[ind1]);
			ind1++;
		}
		counter++;
	}
	return res;
}

let arr1 = [3, 4, 6, 10, 11, 15];
// let arr2 = 	[1, 5, 8, 12, 14, 15, 19];
let arr2 = 	[16, 17, 19];
console.log(mergeSortedArr([], []))