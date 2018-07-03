//write a function that, given a sentence like the one above, along with te position of an opening parenthesis
//finds the corresponding closing parenthesis.

function matchingParen(str, index) {
	let openParen = 0;
	for (let i = index+1; i < str.length; i++) {
		if (str[i] === '(') {
			openParen++;
		} else if (str[i] === ')') {
			openParen--;
		}

		if (openParen < 0) {
			return i;
		}
	}
	console.log('no matching paren found')
}

let message = "Sometimes (when I nest them (my parentheticals) too much (like this (and this))) they get confusing.";
console.log(matchingParen(message, 10));