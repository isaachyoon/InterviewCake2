//implement a queue with 2 tacks. Your queue should have an enqueue and a dequeue function and it should be "first in first out" (FIFO)

function twoStackQueue() {
	this.enqueueStack = [];
	this.dequeueStack = [];
}

twoStackQueue.prototype.enqueue = function(val) {
	this.enqueueStack.push(val);
}

twoStackQueue.prototype.dequeue = function(val) {
		// console.log('17', this.enqueueStack.length)
	if(!this.enqueueStack.length) {
		return null;
	} else if(this.dequeueStack.length === 0) {
		let queueSize = this.enqueueStack.length;
		for	(let i = 0; i < queueSize; i++) {
			this.dequeueStack.push(this.enqueueStack.pop());
		};
	} 
	return this.dequeueStack.pop();
}

let queue = new twoStackQueue();
console.log(queue.dequeue());
queue.enqueue(1);
queue.enqueue(2);
console.log(queue.dequeue());

queue.enqueue(3);
queue.enqueue(4);

console.log(queue.dequeue());
console.log(queue.dequeue());
