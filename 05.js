/*
Making Changes 
compute the number of ways to make amount of money with coins of the available denomination 

			4
		 /  |  \
	   3    2   1
	  / \  | \   \
     2   1 1  0   0
    / \   \ \
   1   0   0 0
   |
   0
1, 1, 1 ,1
2, 2
1, 3
1, 1, 2

*/

// function makeChanges(total, changeArr) {
// 	if(total === 0) {
// 		return 1;
// 	}
// 	if(total < 0) {
// 		return 0;
// 	}
// 	for(let i = 0; i < changeArr.length; i++) {
// 		return 1 + makeChanges(total-changeArr[i], changeArr)
// 	} 
// }

// console.log(makeChanges(2, [1, 2, 3]));



function makingChange(amt, denom){

	return makingChangeHelper(amt, denom, 0, {})

}


function makingChangeHelper(amt, denom, ind, memo) {
	console.log('amt', amt)
	if(amt < 0) {
		return 0;
	}
	if(amt === 0) {
		return 1;
	}
	for(var ind = 0; ind < denom.length; ind ++) {
		let memoString = (amt - denom[ind]).toString();
		console.log(memoString)
		if(!memo[memoString]) {
			memo[memoString] = makingChangeHelper(amt - denom[ind], denom, ind+1, memo) + 1
		}
		console.log(memo)
		return memo[memoString];
	}

}
/*
               	      4
	        /   	  	  | 		   \
         3    		  	2   	  	 1
       / | \       	 / \         |
      2  x  1     	1   x        x
     /       \      |
    1				  x     x
   /
  x


*/



function makingChangeHelper2(amt, denom, subtotal) {

	let counter = 0;
	if(subtotal > amt) {
		return 0;
	}
	if(subtotal === amt) {
		console.log('entered')
		return 1;
	}

	for(let i = 0; i < denom.length; i++) {
		counter += makingChangeHelper2(amt, denom, subtotal + denom[i])
	}

	return counter;

}

let amount = 4;
let denomination = [1, 2, 3]

let output = makingChange(amount, denomination)
console.log(output)
/*
This current solution is O(n^n) because you are iterating through n number of denomination and iterating on n number again in each recursive call;
1, 1, 1, 1
1, 1, 2
1, 2, 1
1, 3
2, 1, 1
2, 2
3, 1

my code is currently returning 7, because it's returning all unique values

amount=4 (4¢) and denominations=[1, 2, 3] (1¢, 2¢ and 3¢),
input: amount , denomination
output: 4
	- 1, 1, 1, 1
	- 1, 2, 1
	- 1, 3
	- 2, 2
*/