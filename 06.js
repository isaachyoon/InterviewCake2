/*
	write a function to find the rectangular intersection of two given love rectangles
*/


let rectangle1 = {
	x: 1,
	y: 10,
	width: 11,
	height: 5
}

let rectangle2 = {
	x: 3,
	y: 12,
	width: 3,
	height: 3 
}


/*
 a ______ c
  |			 |
 b|______|d 
*/


function intersect(rect1, rect2) { 
	let a = null;
	let b = null;
	let c = null;
	let d = null;
	if (rect1.x < rect2.x && rect2.x <= rect1.x + rect1.width) {
		if (rect1.x + rect1.width < rect2.x + rect2.width) { //goes outside
			a = [rect2.x];
			b = [rect2.x];
			c = [rect1.x + rect1.width];
			d = [rect1.x + rect1.width];
		} else if (rect1.x < rect2.x && rect1.x + rect1.width >= rect2.x + rect2.width) {
			a = [rect2.x];
			b = [rect2.x];
			c = [rect2.x + rect2.width];
			d = [rect2.x + rect2.width];
		}
	} else {
		return 'rectangle does not intersect'
	}

	if (rect1.y > rect2.y && rect2.y > rect1.y - rect1.height) {
		if (rect1.y - rect1.height > rect2.y - rect2.height) { //goes outside
			a[1] = rect2.y;
			b[1] = rect1.y - rect1.height;
			c[1] = rect2.y;
			d[1] = rect1.y - rect1.height;
		} else if (rect1.y > rect2.y && rect1.y - rect1.height <= rect2.y - rect2.height) { // is within
			a[1] = rect2.y;
			b[1] = rect2.y - rect2.height;
			c[1] = rect2.y;
			d[1] = rect2.y - rect2.height;
		}
	}  else {
		return 'rectangle does not intersect'
	}
	return {a, b, c, d}
}


console.log(intersect(rectangle1, rectangle2));

/*
	write overlap x function
	write overlap y function
*/