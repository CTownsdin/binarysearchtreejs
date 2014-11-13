'use strict';
// bst.js - has the BST CTor function, and requires the Node in
var Node = require('./bstnode');

// BST CTor function
var BST = function() {      // Binary Search Tree class
    this.root = null;
};
BST.prototype.insert = function (data) {
    var n = new Node(data, null, null);
    if (this.root === null) {
        this.root = n;
    } else {
        var current = this.root;
        var parent;
        while (true) {
            parent = current;
            if (data < current.data) {
                current = current.left;
                if (current === null) {
                    parent.left = n;
                    break;
                }
            } else {
                current = current.right;
                if (current === null) {
                    parent.right = n;
                    break;
                }
            }
        }
    }
};
BST.prototype.update = function (data) {
    var grade = this.find(data);
    grade.count++;
    return grade;
};
// inOrder: log VALUES in order starting from node param
BST.prototype.inOrder = function (node) {
    if (node !== null) {
        this.inOrder(node.left);
        console.log(node.show() + " ");
        this.inOrder(node.right);
    }
};
// genArray:  generates a random set of grades
BST.prototype.genArray = function (length) {
    var arr = [];
    for (var i = 0; i < length; ++i) {
        arr[i] = Math.floor(Math.random() * 101);
    }
    return arr;
};
// prArray:  displays (~prints) the array, from the count version of Node
BST.prototype.prArray = function (arr) {
    console.log(arr[0].toString() + ' ');
    for (var i=1; i<arr.length; ++i) {
        console.log(arr[i].toString() + ' ');
        if (i%10 === 0) {
            console.log("\n");
        }
    }
};
BST.prototype.preOrder = function (node) {
    if (node !== null) {
        console.log(node.show() + " ");
        this.preOrder(node.left);
        this.preOrder(node.right);
    }
};
BST.prototype.postOrder = function (node) {
    if (node !== null) {
        this.postOrder(node.left);
        this.postOrder(node.right);
        console.log(node.show() + " ");
    }
};
BST.prototype.getSmallest = function (node) { // ecjs implementation
    var current = node;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
};
BST.prototype.getMin = function() { // book implementation
    var current = this.root;
    while (current.left !== null) {
        current = current.left;
    }
    return current.data;
};
BST.prototype.getMax = function() {
    var current = this.root;
    while (current.right !== null) {
        current = current.right;
    }
    return current.data;
};
BST.prototype.find = function (data) {
    var current = this.root;
    while (current && current.data !== data) {
        if (data < current.data) {
            current = current.left;
        } else {
            current = current.right;
        }
    }
    return current;
};
BST.prototype.remove = function (data) {
    this.root = this.removeNode(this.root, data);
};
BST.prototype.removeNode = function (node, data) {
    if (node === null) {
        return null;
    }
    if (data === node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
            return null;
        }
        // node has no left child
        if (node.left === null) {
            return node.right;
        }
        // node has no right child
        if (node.right === null) {
            return node.left;
        }
        // node has two children
        var tempNode = this.getSmallest(node.right);
        node.data = tempNode.data;
        node.right = this.removeNode(node.right, tempNode.data);
        return node;
    } else if (data < node.data) {
        node.left = this.removeNode(node.left, data);
        return node;
    } else {
        node.right = this.removeNode(node.right, data);
        return node;
    }
};
// // TRAVERSE - returns an extra undefined
// BST.prototype.traverse = function (callback) {
//     function inOrder2(node) {
//         if (node !== null) {
//             inOrder2(node.left);
//             callback.call(this, node);
//             inOrder2(node.right);
//         }
//     }
//     inOrder2(this.root);
// };
// // SIZE
// BST.prototype.size = function () {
//     var length = 0;
//     this.traverse(function(node){
//         length++;
//     });
// };

module.exports = BST;
