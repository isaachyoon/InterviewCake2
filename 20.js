//You've implemented a 'Stack' class, but you want to be able to access the largest element in a stack.

class Stack {
	
	constructor() {
		this.items = [];
		this.max = 0;
		this.maxStack = [];
	}

	//push a new item to the last index
	push(item) {
		if (item > this.max) {
			this.max = item;
			this.maxStack.push(this.max);
		}
		this.items.push(item);
	}

	//remove the last item
	pop() {
		//if the stack is empthy return none;
		if (!this.items.length) return 'None';
		let popVal = this.items.pop();
		if(popVal === this.maxStack[this.maxStack.length - 1]) {
			this.maxStack.pop();
			this.max = this.maxStack[this.maxStack.length - 1];
		}
		return popVal;
	}

	get peek() {
		//if the stack is empty, return None
		if (!this.items.length) return 'None';
		return this.items[this.items.length -1];
	}

	getMax() {
		console.log(this.maxStack)
		return this.maxStack[this.maxStack.length - 1];
	}
}

let st = new Stack();
console.log(st.pop())
st.push(3);
st.push(5);
st.pop();
console.log(st.getMax())
