//write a function to reverse a string in place

function reverseString(str) {
	let start = 0;
	let end = str.length-1;
	let strArr = str.split('')
	while(start < end) {
		console.log(start,end)
		let temp = strArr[start];
		strArr[start] = strArr[end];
		strArr[end] = temp;
		start++;
		end--;
	}
	return strArr;
}

console.log(reverseString('helloWorld'));