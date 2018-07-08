function findDuplicate(arr) {
	let dupInd = []
	for (let i = 0; i < arr.length; i++) {
		let pointingInd = Math.abs(arr[i]) - 1;
		if (arr[pointingInd] < 0) {
			dupInd.push(pointingInd + 1)
		} else {
			arr[pointingInd] = -1 * arr[pointingInd];
			console.log(arr)
		}
	}
	return dupInd
}

console.log(findDuplicate([3, 2, 4, 6, 2, 1, 4]));
//                                   
//pointingInd = 2
//console.log(findRepeat([3, 2, 4, 6, 2, 1, 4]))
