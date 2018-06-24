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


function isTreeSuperbalanced(tree) {
	let result = isTreeSuperbalancedHelper(tree);
	if(result !== false) {
	 	return true;
	} else {
		return false;
	}
}

function isTreeSuperbalancedHelper(tree) {
	if(!tree) {
		return 0;
	}

	let leftDepth = isTreeSuperbalancedHelper(tree.left);
	let rightDepth = isTreeSuperbalancedHelper(tree.right);

	if(leftDepth === false || rightDepth === false) {
		return false;
	}
	let longerDepth = Math.max(leftDepth + 1, rightDepth + 1);
	if(longerDepth > 1) {
		return false;
	} else {
		return longerDepth;
	}
}

console.log(isTreeSuperbalanced(bTree))