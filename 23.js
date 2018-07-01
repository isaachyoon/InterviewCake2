function contains_cycle(ll) {
	let point1 = ll;
	let point2 = ll.next;

	while(point1 !== point2) { //either find each other or has an end
		if(point1 === null || point2 === null) {
			return false;
		} 
		point1 = point1.next;
		point2 = point2.next.next;
		console.log(point1)
	}	

	return true;
}

function node(value) {
	this.val = value;
	this.next = null;
}

let node1 = new node(1);
let node2 = new node(2);
let node3 = new node(3);
let node4 = new node(4);
let node5 = new node(5);
let node6 = new node(6);
let node7 = new node(7);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
node5.next = node6;
node6.next = node7;
// node7.next = null;
node7.next = node1;


console.log(contains_cycle(node1))