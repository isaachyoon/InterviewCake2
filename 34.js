function infographics(str) {
	let newStr = str.replace(/,|:|;|'|!|\?/ig, '');
	// newStr = newStr.replace(/\s/ig, '');
	let newArr = newStr.split(' ');
	let wordHash = {};
	newArr.forEach((word) => {
		word = word.toLowerCase();
		if(!wordHash[word]) {
			wordHash[word] = 0;
		}
		wordHash[word]++;
	})
	console.log(wordHash)
}

let str = 'After beating the eggs, Dana read the next step:'
console.log(infographics(str))