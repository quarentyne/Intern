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

		let node = this.findNode(data);
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

Array.prototype.insertionSort = function () {
	for (let i = 1; i < this.length; i++) {
		let currentItem = this[i];
		let j = i;
		while (j > 0 && this[j - 1] > currentItem) {
			this[j] = this[j - 1];
			this[j - 1] = currentItem;
			j--;
		}
	}
	return this;
};

Array.prototype.bubbleSort = function () {
	let length = this.length - 1;
	for (let i = 0; i < length; i++) {
		for (let j = 0; j < length - i; j++) {
			if (this[j] > this[j + 1]) {
				let currentItem = this[j];
				this[j] = this[j + 1];
				this[j + 1] = currentItem;
			}
		}
	}
	return this;
};