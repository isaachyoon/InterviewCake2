//you have a function rand7() that generates a randome integer from 1 to 7. 
//Use it to write a function rand5() that generates a randome integer from 1 to 5

function rand5() {
	let num = rand7();
	console.log(Math.ceil(num/7 * 5))
}

function rand5() {
	let res = 7;
	while (res > 5) {
		res = rand7();
	}
	return res;
}

function rand7() {
	return Math.ceil(Math.random() * 7);
}

console.log(rand5())
