function binarySearch(arr, num) {
	let start = 0;
	let end = arr.length - 1;

	while(start < end) {
		let mid = Math.round((start + end) / 2);
		console.log(start, end, arr[mid])
		if(arr[mid] === num) {
			return mid;
		}
		if(arr[mid] < num) {
			start = mid + 1;
		} else if (arr[mid] > num) {
			end = mid - 1;
		}
	}
	return null;
}


console.log(binarySearch([1, 4, 6, 9, 11, 15, 17, 19, 25], 19));
//						                         ^