//you have a linked list and want to find the kth to last node.

function kth_to_last_node(k, node) {
	let point1 = node;
	let point2 = node;
	for (let i = 0; i < k; i++) {
		point2 = point2.next;
	}

	while (point2) {
		point1 = point1.next;
		point2 = point2.next;
	} 
	return point1;
}

function Node(value) {
	this.val = value;
	this.next = null;
}

let a = new Node('Angel Food');
let b = new Node('Bundt');
let c = new Node('Cheese');
let d = new Node('Devils Food');
let e = new Node('Eccles');

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(kth_to_last_node(2, a));