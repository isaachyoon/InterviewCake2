function rotationPoint(arr) {
	let start = 0;
	let end = arr.length - 1;
	let mid = null;

	while(end - start > 0) {
		mid = Math.floor((start + end) / 2);
		console.log('7', arr[mid])
		let startChar = arr[start].charCodeAt(0)
		let currChar = arr[mid].charCodeAt(0);
		if (startChar < currChar) { 
			start = mid;
		} else if (startChar >= currChar) {
			end = mid;
		}
	}
	return arr[mid + 1];
}

let testArr = ['ptolemaic', 'retrograde', 'supplant', 'undulate', 'xenoepist','ashymptote','asymptote','asymptote','asymptote', 'babka', 'banoffee', 'engender', 'karpatka', 'othellolagkage']
//								                      ^									^									

console.log(rotationPoint(testArr));