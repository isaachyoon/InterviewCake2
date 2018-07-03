//write a function reverse_words() that takes a string message and reverses the order of the words in place

function reverse_words(message) {
	let messageArr = message.split(' ');
	let start = 0;
	let end = messageArr.length - 1;

	while (start < end) {
		let temp = messageArr[start];
		messageArr[start] = messageArr[end];
		messageArr[end] = temp;
		start++;
		end--;
	}
	return messageArr.join(' ');
}


let message = 'find you will pain only go you recordings security the into if';
console.log(reverse_words(message));