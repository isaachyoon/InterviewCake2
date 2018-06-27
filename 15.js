/*
	write a function fib() that takes an integer n and returns the nth fibonacci number
	fib(0) => 0
	fib(1) => 1

	using memoize to improve efficiency fib(40) without memoize took 1.5 seconds. with memoize, takes .1s.
*/

function fib(num, memo) {

	if(num === 0) {
		return 0;
	} else if (num === 1) {
		return 1;
	}

	if(memo[num]) {
		return memo[num];
	} else {
		let res = fib(num - 1, memo) + fib(num-2, memo);
		console.log(memo)
		memo[num] = res;
		return res;
	}

}

console.log(fib(40, {}))
