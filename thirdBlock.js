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
    if (data === 0 || data) {
      this.data = data;
      this.left = null;
      this.right = null;
    } else {
      throw new Error('Insert new data');
    }
  }

  add(root) {
    if (typeof root !== 'object') {
      root = new BinaryTree(root);
    }
    if (root.data < this.data) {
      if (!this.left) {
        return this.left = root;
      }
      this.left.add(root);
      return;
    }
    
    if (!this.right) {
      return this.right = root;      
    }
    this.right.add(root);
  }

  find(data) {
    if (this.data === data) {
      return this;
    }
    if (this.data === null) {
      return null;
    }
    if (this.data < data) {
      return this.right?.find(data);
    }
    return this.left?.find(data);
  }

  delete(data) {
    if (data === undefined) {
      return this;
    } else if (this.data < data) {
      this.right = this.right?.delete(data);
      return this;
    } else if (this.data > data) {
      this.left = this.left?.delete(data);
      return this;
    }

    if (!this.right && !this.left) {
      return null;
    }
    if (this.right && !this.left) {
      return this.right;
    }
    if (!this.right && this.left) {
      return this.left;
    }

    let newNode = this.right;
    while (newNode.left) {
      newNode = newNode.left;
    }
    this.data = newNode.data;
    this.right = this.right.delete(newNode.data);
    return this;
  }
}