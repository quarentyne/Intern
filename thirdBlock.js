'use strict';

Array.prototype.bubbleSort = function (callback) {
  if (typeof callback !== 'function') {
    callback = (element1, element2) => element1 > element2;
  }
  let length = this.length - 1;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length - i; j++) {
      if (callback(this[j], this[j + 1])) {
        let currentItem = this[j];
        this[j] = this[j + 1];
        this[j + 1] = currentItem;
      }
    }
  }
  return this;
};

Array.prototype.insertionSort = function (callback) {
  if (typeof callback !== 'function') {
    callback = (element1, element2) => element1 > element2;
  }
  for (let i = 1; i < this.length; i++) {
    let j = i;
    let currentItem = this[i];
    while (j > 0 && callback(this[j - 1], currentItem)) {
      
      this[j] = this[j - 1];
      this[j - 1] = currentItem;
      j--;
    }
  }
  return this;
};

class BinaryTree {
  constructor() {
    this.root = null;
  }

  newElement(data) {
    let newObject = Object.create(null);
    newObject.data = data;
    newObject.left = null;
    newObject.right = null;
    newObject.parent = null;
    return newObject;
  }

  addNode(data) {
    let newItem = this.newElement(data);
    if (!this.root) {
      this.root = newItem;
      return;
    }
    if (!data) {
      return;
    }

    function insertNewNode(currentNode) {
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
      if (currentNode === null) {
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
      if (Node.parent === null) {
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

    function deleteNodeWithoutChild(node) {
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
      deleteNodeWithoutChild(node);
    }
    if ((node.left && !node.right) || (!node.left && node.right)) {
      deleteNodeWithChild(node);
    }
    if(node.left && node.right){
      deleteNodewithChildren(node);
    }    
  }
}

// let tree = new BinaryTree();
// tree.addNode(10);
// tree.addNode(30);
// tree.addNode(33);
// tree.addNode(7);
// tree.addNode(9);
// tree.addNode(8);
// tree.addNode(4);
// tree.addNode(5);
// tree.addNode(6);
// tree.addNode(0);
// tree.addNode(3);
// tree.addNode(1);
// tree.addNode(2);
// tree.addNode(-5);
// tree.addNode(true);
// console.log(tree);

// console.log(tree.findNode(1));
