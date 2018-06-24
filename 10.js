//-------------------------------------------------------------------------------------------------

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

let bTree = new binaryTree(40);

bTree.insert(30);
bTree.insert(10);
// bTree.insert(100);
// bTree.insert(90);
// bTree.insert(110);

// bTree.insert(95);

// console.log(bTree)
//---------------------------------------------------------------------------------------------------


function findSecondLargest(tree) {
	let largest = 0;
	let secondLargest = 0;

	while(tree) {
		if(tree.val > largest) {
			secondLargest = largest;
			largest = tree.val;
		} else if (tree.val > secondLargest) {
			secondLargest = tree.val;
		}

		if(tree.right) {
			tree = tree.right;
		} else if(tree.left) {
			tree = tree.left;
		} else {
			return secondLargest;
		}
	}
	return secondLargest;
}

console.log('solution', findSecondLargest(bTree));