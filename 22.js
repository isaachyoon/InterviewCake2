//basic implementation for linkedlist
function node(value) {
	this.val = value;
	this.next = null;
}


class LinkedList {
	constructor() {
		this.head = null;
		this.end = null;
	}

	insert(val) {
		if (!this.head) {
			this.head = new node(val);
			this.end = this.head;
		} else {
			let newNode = new node(val);
			this.end.next = newNode;
			this.end = newNode;
		}
	}
}

let ll = new LinkedList();
ll.insert(3);
ll.insert(5);
ll.insert(6);
ll.insert(7);
console.log(ll)


/*
Delete a node fomr singly linked list, given only a varible pointing to that node
a = Node('A');
b = Node('B');
c = Node('C');

a.next = b;
b.next = c;

delete_node(b);
*/

function delete_node(node) {
	if(node.next.next) {
		node.val = node.next.val;
		node.next = node.next.next;
	} else {
		node = null;
	}
}
