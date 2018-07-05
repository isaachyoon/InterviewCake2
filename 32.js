function sortScore(arr, maxValue) {
	let sortArr = [];
	for (let i = 0; i < arr.length; i++) {
		let arrValue = arr[i];
		if(!sortArr[arrValue]) {
			sortArr[arrValue] = 0;
		}
		sortArr[arrValue]++;
	}
	let resArr = [];
	for (let i = maxValue; i >=0; i--) {
		var count = sortArr[i];
		if (count > 0) {

			for (let j = 0; j < count; j++) {
				resArr.push(i);
			}
		} 
	}
	return resArr;
}

console.log(sortScore([3,1,2,6,11,2,6,4], 11))