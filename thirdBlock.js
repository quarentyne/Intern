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
    if(data === 0 || data){
      this.data = data;
      this.left = null;
      this.right = null;
    } else {
      throw new Error('Insert new data')
    }    
  }

  add(root) {
    if(typeof root !=='object'){
      root = new BinaryTree(root);
    }
    if (root.data < this.data) {
      if (!this.left) {
        this.left = root;
        return;
      }
      this.left.add(root);
      return;
    }
    
    if (!this.right) {
      this.right = root;
      return;
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
      return this.right.find(data);
    }
    return this.left.find(data);
  }

  delete(data, node) {
    node = node || this;
    if (node.data < data) {
      
      node.right = node.right.delete(data, node.right);
      return node;
      
    }
    if (node.data > data) {
      node.left = node.left.delete(data);
      return node;
    }
    if (node.data === data) {
      if (node.right === null && node.left === null) {
        node = null;
      }
    }
    return null;
  }
//   deleteNodeWithoutChild(root, node) {
//     if (root.left === node) {
//       root.left = null;
//     }
//     root.right = null;
//   }

//   deleteNodeWithLeftChild(root, node) {
//     if (root.right === node) {
//       root.right = node.left;
//     } else{
//       root.right = node.right;
//     }
//   }
//   deleteNodeWithRightChild(root, node) {
//     if (root.right === node) {
//       root.right = node.right;
//     } else{
//       root.left = node.right;
//     }
//   }

//   deleteNodewithChildren(root, node) {
//     let newRoot = node.right;
//     if (newRoot.left) {
//       while (newRoot.left) {
//         newRoot = newRoot.left;
//       }
//     }
//     if (root.right === node) {
//       root.right = newRoot;
//     } else {
//       root.left = newRoot;
//     }

//     changedNode.parent.right = changedNode.left;
//     changedNode.parent.right.parent = changedNode.parent;
//     changedNode.right = node.right;
//     changedNode.left = node.left;
//     node.left.parent = changedNode;
//     node.right.parent = changedNode;

    
//   }



//   deleteNode(data) {
//     if (this.right.data < data) {
//      return this.right.deleteNode(data);
//     }
//     if(this.right.data === data || this.left.data === data){
//       return this;
//     }
//     return this.left.deleteNode(data);
// }


//   delete(data) {
//     let node = this.find(data);
//     let root = this.deleteNode(data);
//     if (!node.left && !node.right) {
//       this.deleteNodeWithoutChild(root, node);
//     }
//     if ((node.left && !node.right)) {
//       this.deleteNodeWithLeftChild(root, node);
//     }
//     if((!node.left && node.right)) {
//       this.deleteNodeWithRightChild(root, node);
//     }
//     if(node.left && node.right){
//       deleteNodewithChildren(root, node);
//     }  
//   }



  // deleteNode(data) {
  //   let that = this;

  //   function changeParent(nextNode) {
  //     if (Node.parent === null) {
  //       that.root = nextNode;
  //       nextNode.parent = null;
  //       return;
  //     }
  //     nextNode.parent = node.parent;
  //     if (node.parent.left === node) {
  //       node.parent.left = nextNode;
  //     }
  //     if (node.parent.right === node) {
  //       node.parent.right = nextNode;
  //     }
  //   }

  //   function deleteNodeWithoutChild(node) {
  //     if (node.parent === null) {
  //       that.root = null;
  //     }
  //     if (node.parent.left === node) {
  //       node.parent.left = null;
  //       return;
  //     }
  //     node.parent.right = null;
  //   }

  //   function deleteNodeWithChild(node) {
  //     let nextNode;
  //     if (node.left) {
  //       nextNode = node.left;
  //       changeParent(nextNode);
  //       return;
  //     }
  //     nextNode = node.right;
  //     changeParent(nextNode);
  //   }

  //   function deleteNodewithChildren(node) {
  //     let changedNode = node.left;
  //     if (changedNode.right) {
  //       while (changedNode.right) {
  //         changedNode = changedNode.right;
  //       }
  //     }

  //     changedNode.parent.right = changedNode.left;
  //     changedNode.parent.right.parent = changedNode.parent;
  //     changedNode.right = node.right;
  //     changedNode.left = node.left;
  //     node.left.parent = changedNode;
  //     node.right.parent = changedNode;

  //     changeParent(changedNode);
  //   }

  //   let node = this.findNode(data);
  //   if (!node.left && !node.right) {
  //     deleteNodeWithoutChild(node);
  //   }
  //   if ((node.left && !node.right) || (!node.left && node.right)) {
  //     deleteNodeWithChild(node);
  //   }
  //   if(node.left && node.right){
  //     deleteNodewithChildren(node);
  //   }    
  // }
}

let tree = new BinaryTree(10);
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
tree.delete(34);
console.log(tree);

// console.log(tree.findNode(1));