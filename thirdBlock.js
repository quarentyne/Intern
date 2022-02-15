"use strict";

class BinaryTree {
	constructor() {
		this.root = null;
	}

	newElement(data) {
		let object = Object.create(null);
		object.data = data;
		object.left = null;
		object.right = null;
		object.parent = null;
		return object;
	}

	addNode(data) {
		let newItem = this.newElement(data);
		if (!this.root) {
			this.root = newItem;
			return;
		}

		function insert(currentNode){
			if (newItem.data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newItem;	
					newItem.parent = currentNode;
					return;
				}
				insert(currentNode.left);
				return;
			} 
			if (!currentNode.right) {
				currentNode.right = newItem;	
					newItem.parent = currentNode;
				return;
			}
			insert(currentNode.right);
			return;
		}
		insert(this.root);
	}

	findNode(data) {
		if (this.root.data === data) {
			return this.root;
		}

		function search(currentNode) {
			if (currentNode === null){
				return null;
			}
			if (currentNode.data === data) {
				return currentNode;
			}
			if (currentNode.data < data) {
				return search(currentNode.right);
			}
			return search(currentNode.left);
		}
		return search(this.root);
	}
	
	deleteNode(data) {
		let that = this;
		function deleteNodeWithouChild(node) {
			if (node.parent === null) {
				that.root = null;
			}
			if (node.parent.left === node) {
				node.parent.left = null;
				return;
			}
			node.parent.right = null;
		}
		
		function deleteNodeWithouChild(node) {
			
			function changeParent(nextNode) {
				if (node.parent === null) {
					that.root = nextNode;
					nextNode.parent = null;
					return;
				}
				nextNode.parent = node.parent;
				if (node.parent.left === node) {
					node.parent.left = nextNode;
				}
				if (node.parent.right === node) {
					node.parent.right = nextNode;
				}
			}
			
			let nextNode;
			if (node.left) {
				nextNode = node.left;
				changeParent(nextNode);
				return;
			}
			nextNode = node.right;
			changeParent(nextNode);
		}
		
		function deleteNodewithChildren(node) {
			
		}

		let node = this.findNode(data)
		if (!node.left && !node.right) {
			deleteNodeWithouChild(node);
		}
		if ((node.left && !node.right) || (node.right && !node.left)) {
			deleteNodeWithouChild(node);
		}
		if (node.left && node.right) {
			deleteNodewithChildren(node);
		}
		
	}
}
let tree = new BinaryTree();
tree.addNode(10);
tree.addNode(1);
// tree.addNode(3);
// tree.addNode(30);
// tree.addNode(33);
// tree.addNode(0);
// tree.addNode(-1);

// console.log(tree.findNode(1));
console.log(tree.deleteNode(10));

console.log(tree);





const bubbleSort = function (array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				let current = array[j];
				array[j] = array[j + 1];
				array[j + 1] = current;
			}
		}
	}
	return array;
};

const insertionSort = function (array) {
	for (let i = 0; i < array.length; i++) {
		let current = array[i];
		let j = i;
		while (j > 0 && array[j - 1] > current) {
			array[j] = array[j - 1];
			j--;
		}
		array[j] = current;
	}
	return array;
};
