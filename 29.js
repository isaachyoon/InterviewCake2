function checkParen(str) {
	let openPren = [];
	for (let i = 0; i < str.length; i++) {
		if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
			openPren.push(str[i]);
		} else if (str[i] === ')' || str[i] === '}' || str[i] ===']') {
			if (openPren.length === 0) {
				return false;
			} else if (str[i] === ')' && openPren[openPren.length - 1] === '(') {
				openPren.pop();
			} else if (str[i] === '}' && openPren[openPren.length - 1] === '{') {
				openPren.pop();
			} else if (str[i] === ']' && openPren[openPren.length - 1] === '[') {
				openPren.pop();
			} 
		}
	}
	if(openPren.length > 0) {
		return false;
	} else {
		return true;
	}
}

let str = '([{]})';
console.log(checkParen(str));

/*
	([{])
	[(, [, {, ]
*/