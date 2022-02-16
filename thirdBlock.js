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

		function insertNewNode(currentNode){
			if (newItem.data < currentNode.data) {
				if (!currentNode.left) {
					currentNode.left = newItem;	
					newItem.parent = currentNode;
					return;
				}
				insertNewNode(currentNode.left);
				return;
			} 

			if (!currentNode.right) {
				currentNode.right = newItem;	
					newItem.parent = currentNode;
				return;
			}
			insertNewNode(currentNode.right);	
		}

		insertNewNode(this.root);
	}

	findNode(data) {
		if (this.root.data === data) {
			return this.root;
		}

		function searchNode(currentNode) {
			if (currentNode === null){
				return null;
			}
			if (currentNode.data === data) {
				return currentNode;
			}
			if (currentNode.data < data) {
				return searchNode(currentNode.right);
			}
			return searchNode(currentNode.left);
		}
		return searchNode(this.root);
	}
	
	deleteNode(data) {
		let that = this;
		
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

		function deleteNodeWithChild(node) {			
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
			let changedNode = node.left;
			if (changedNode.right) {
				while (changedNode.right) {
					changedNode = changedNode.right;
				}
			}

			changedNode.parent.right = changedNode.left;
			changedNode.parent.right.parent = changedNode.parent;
			changedNode.right = node.right;
			changedNode.left = node.left;
			node.left.parent = changedNode;
			node.right.parent = changedNode;
			
			changeParent(changedNode);
		}

		let node = this.findNode(data)
		if (!node.left && !node.right) {
			deleteNodeWithouChild(node);
		}
		if ((node.left && !node.right) || (node.right && !node.left)) {
			deleteNodeWithChild(node);
		}
		if (node.left && node.right) {
			deleteNodewithChildren(node);
		}		
	}
}







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
