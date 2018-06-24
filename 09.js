function binaryTree(val) { 
	this.left = null;
	this.right = null;
	this.val = val;;
}

binaryTree.prototype.insert = function(val) {
	if (!this.val) {
		this.val = val;
	} else {
		if (val < this.val) {
			if(!this.left) {
				this.left = new binaryTree(val);
			} 
			this.left.insert(val);
		} else if (val > this.val ) {
			if(!this.right) {
				this.right = new binaryTree();
			}
			this.right.insert(val);
		}
	}
}

let bTree = new binaryTree(4);
bTree.insert(3);
bTree.insert(5);
bTree.insert(2);
bTree.insert(1);


function checkValidBinaryTree(tree, arr) {
	if(!tree) {
		return;
	}
	checkValidBinaryTree(tree.left, arr);
	arr.push(tree.val);
	checkValidBinaryTree(tree.right, arr);
}


function validBinaryTree(tree) {
	let arr = [];
	checkValidBinaryTree(tree, arr);
	for(var i = 0; i < arr.length-1; i++) {
		if(arr[i] > arr[i+1]) {
			return false;
		}
	}
	return true;
}

console.log(validBinaryTree(bTree));


