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
  constructor(data) {
    // this.root = null;
    if(data === 0 || data){
      this.data = data;
      this.left = null;
      this.right = null;
    } else {
      throw new Error('Insert new data')
    }    
  }

  // newElement(data) {
  //   let newObject = Object.create(null);
  //   newObject.data = data;
  //   newObject.left = null;
  //   newObject.right = null;
  //   newObject.parent = null;
  //   return newObject;
  // }
  #insertNewNode(currentNode, newItem) {
    if (newItem.data < currentNode.data) {
      if (!currentNode.left) {
        currentNode.left = newItem;
        return;
      }
      insertNewNode(currentNode.left);
      return;
    }
    
    if (!currentNode.right) {
      currentNode.right = newItem;
      return;
    }
    insertNewNode(currentNode.right);
  }
    
  add(data) {
    let newItem = new BinaryTree(data);
    this.#insertNewNode(this, newItem);
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

let tree = new BinaryTree(10);
console.log(tree);
tree.add(30);
tree.add(33);
tree.add(7);
tree.add(9);
tree.add(8);
tree.add(4);
tree.add(5);
tree.add(6);
tree.add(0);
tree.add(3);
tree.add(1);
tree.add(2);
tree.add(-5);
// tree.addNode(true);
// console.log(tree);

// console.log(tree.findNode(1));
