//write a function for doing an in-place shuffle of an array
function inPlaceShuffle(arr) {
	for (let i = arr.length - 1; i >= 0; i--) {
		let randIndex = Math.floor(Math.random() * i);
		console.log(i ,randIndex)
		let temp = arr[i];
		arr[i] = arr[randIndex];
		arr[randIndex] = temp;
	}
	return arr
}

let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
console.log(inPlaceShuffle(arr));
