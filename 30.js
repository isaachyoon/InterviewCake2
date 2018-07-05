//write an efficient function that checks whether any permutation of an input string is a palindrome

function permutationPalindrome(str) {
	let permuteHash = {};
	for (let i = 0; i < str.length; i++){
		let currLetter =  str[i].toLowerCase();
		if (!permuteHash[str[i]]) {
			permuteHash[str[i]] = 0;
		} 
		permuteHash[str[i]]++;
	}
	let oddLetter = 0;
	for (let letter in permuteHash) {
		if(permuteHash[letter] % 2 !== 0) {
			oddLetter++;
		}
	}
	if(oddLetter > 1) {
		return false;
	} 
	return true;
}

let str1 = 'civic';
let str2 = 'ivicc';
let str3 = 'civil';
let str4 = 'livci';

let value = permutationPalindrome(str4)
console.log(value);