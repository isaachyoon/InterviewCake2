//What is wrong with teh following code?

/*
1.
	<button id="btn-0"> Button 1! </button>
	<button id="btn-1"> Button 1! </button>
	<button id="btn-2"> Button 2! </button>

<script type = "text/javascript">
	var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry'];
	for (var btnNum = 0; btnNum < prizes.length; btnNum++) {
		//for each of our butons, when the user clicks it...
		document.getElementById('btn-' + btnNum).onClick = function() {
			//tell her she won!
			alert(prizes[btnNum]);
		};
	}


////////////////
Solution: btnNum doesn't have access to scope of the for loop and therefore we can solve this problem through IIFE 
(immediately invoked function expression)
*/

var prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry'];
for (car btnNum = 0; btnNum < prizes.length; btnNum++) {
	document.getElementById('btn-' + btnNum).onClick = function(frozenBtnNum) {
		return function() {
			alert(prizes[frozenBtnNum])
		}
	}(btnNum);
}

//argument passed by value vs passed by reference

var threatLevel = 1;

function inspireFear(threatLevel) {
	threatLevel += 100;
}

inspireFear(threatLevel);
console.log(threatLevel); //still 1

