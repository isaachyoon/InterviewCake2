/*
	If we excute this javascript, what will the browser's console show?
*/

var text = 'outside';
function lopIt() {
	console.log(text);
	var text = 'insde';
}
logIt();

//because all new declarations are hoisted, the function will act like this:

var text = 'outside';
function logIt() {
	var text;
	console.log(text); // text in this context is unefined;
	text = 'inside';
}
logIt();