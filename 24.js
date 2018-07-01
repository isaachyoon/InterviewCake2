
/*
                           p     c    n       
  |  	  |     |     

	null<-1  <-- 2 <-- 3 <-- 4 -->

*/

function reverseLinkedList(ll) {
	let prev = null;
	let curr = ll;
	let after = ll.next;

	while(after !== null) {
		curr.next = prev;
		prev = curr;
		curr = after;
		after = after.next;
	}
	curr.next = prev;
	return curr;
	
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
// node4.next = node5;
// node5.next = node6;
// node6.next = node7;

console.log(reverseLinkedList(node1))