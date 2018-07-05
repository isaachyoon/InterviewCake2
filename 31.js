//write a recursive function for generating all permuations of an input string

function permutation(str, curr = '', arr = []) {
	let res = 	[];
	permutationHelper(str, curr, res)
	return res;
}

function permutationHelper(str, curr = '', arr = []) {
	if(str.length === 0) {
		return arr.push(curr);
	}
	for(let i = 0; i < str.length; i++) {
		let res = [];
		let currLetter = str[i];
		let remain = str.slice(0, i) + str.slice(i+1, str.length);
		permutationHelper(remain, curr + currLetter, arr);
	}
}
// let res = [];
console.log(permutation('abcd'));
// console.log(res)



/*
	[c,a,t]
	 ^

c at
c a t
*/