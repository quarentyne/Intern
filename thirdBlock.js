"use strict";

class Node {
  constructor(data) {
		this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.parent = null;
	}
}

class BinTree {
	constructor() {
		this.root = null;
	}
	
  insert(newNode) {
		// Если корень дерева пуст
		if (this.root === null) {
			this.root = newNode;
			return;
		}
		
		function insertInside(currentNode) {
			if (newNode.data < currentNode.data) {
				if (currentNode.leftChild !== null) {
					insertInside(currentNode.leftChild);
				} else {
					newNode.parent = currentNode;
					currentNode.leftChild = newNode;
				}
			} else {
				if (currentNode.rightChild !== null) {
					insertInside(currentNode.rightChild);
				} else {
					newNode.parent = currentNode;
					currentNode.rightChild = newNode;
				}
			}
		}
		// Ищем куда вставить, стартуем с корня
		insertInside(this.root);
	}
	
	search(data) {
		
		function searchInside(currentNode) {
			if (currentNode === null){
				return null;
			}
			if (currentNode.data === data){
				return currentNode;
			}
			if (currentNode.data > data){
				return searchInside(currentNode.leftChild);
			}
			else{
				return searchInside(currentNode.rightChild);
			}
		}
		return searchInside(this.root);
	}
	
	delete(data) {
		// Для удаления элемента с одним, или нулем, наследников
		function deleteOneOrNoChildElem(node) {
			let newNode = null;
			if (node.leftChild){
				newNode = node.leftChild;
			} else if (node.rightChild){
				newNode = node.rightChild;
			}			
			if (node.parent === null) {
				this.root = newNode;
			} else {
				if (node.parent.leftChild === node) {
					node.parent.leftChild = newNode;
				} else {
					node.parent.rightChild = newNode;
				}
			}
		}
		// Для удаления элемента с двумя наследниками
		function deleteTwoChildElem(node) {
			let result = node.leftChild;
			if (result.rightChild) {
				while (result.rightChild) {
					result = result.rightChild;
				}
			}
			deleteOneOrNoChildElem(result);
			let leftNodeChild = node.leftChild;
			let rightNodeChild = node.rightChild;
			
			if (node.parent === null) {
				result.leftChild = leftNodeChild;
				result.rightChild = rightNodeChild;
				this.root = result;
			} else {
				if (node.parent.leftChild === node) {
					result.leftChild = leftNodeChild;
					result.rightChild = rightNodeChild;
					node.parent.leftChild = result;
				} else {
					result.leftChild = leftNodeChild;
					result.rightChild = rightNodeChild;
					node.parent.rightChild = result;
				}
			}
		}
		
		let node = this.search(data);
		if (node.leftChild && node.rightChild) {
			deleteTwoChildElem.call(this, node);
		}	else {
			deleteOneOrNoChildElem.call(this, node);
		}	
	}
}

let binTree = new BinTree();
// binTree.insert(new Node(10))
// binTree.insert(new Node(20))
// binTree.insert(new Node(-10))
// binTree.insert(new Node(30))
// binTree.insert(new Node(41))
// binTree.insert(new Node(25))
// console.log(binTree);
// console.log(binTree.search(41));
// binTree.delete(20)
// binTree.insert(new Node(22))





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
