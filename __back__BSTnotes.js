// 'use strict';



//  THIS IS JUST A SCRATCH NOTES FILE
//  nothing in here is actually used.




// var Node = require('./bstnode.js');


// var BST = function () {      // Binary Search Tree class
//     this.root = null;
// }
// BST.prototype.insert = function (data) {
//     var n = new Node(data, null, null);
//     if (this.root === null) {
//         this.root = n;
//     } else {
//         var current = this.root;
//         var parent;
//         while (true) {
//             parent = current;
//             if (data < current.data) {
//                 current = current.left;
//                 if (current === null) {
//                     parent.left = n;
//                     break;
//                 }
//             } else {
//                 current = current.right;
//                 if (current === null) {
//                     parent.right = n;
//                     break;
//                 }
//             }
//         }
//     }
// };
// BST.prototype.update = function (data) {
//     var grade = this.find(data);
//     grade.count++;
//     return grade;
// };
// // log VALUES in order starting from node param
// BST.prototype.inOrder = function (node) {
//     if (node !== null) {
//         this.inOrder(node.left);
//         console.log(node.show() + " ");
//         this.inOrder(node.right);
//     }
// };
// // genArray generates a set of grades
// BST.prototype.genArray = function (length) {
//     var arr = [];
//     for (var i = 0; i < length; ++i) {
//         arr[i] = Math.floor(Math.random() * 101);
//     }
//     return arr;
// };
// // prArray displays the array, from the count version of Node
// BST.prototype.prArray = function (arr) {
//     console.log(arr[0].toString() + ' ');
//     for (var i=1; i<arr.length; ++i) {
//         console.log(arr[i].toString() + ' ');
//         if (i%10 === 0) {
//             console.log("\n");
//         }
//     }
// };
// BST.prototype.preOrder = function (node) {
//     if (node !== null) {
//         console.log(node.show() + " ");
//         this.preOrder(node.left);
//         this.preOrder(node.right);
//     }
// };
// BST.prototype.postOrder = function (node) {
//     if (node !== null) {
//         this.postOrder(node.left);
//         this.postOrder(node.right);
//         console.log(node.show() + " ");
//     }
// };
// BST.prototype.getSmallest = function (node) { // ecjs implementation
//     var current = node;
//     while (current.left !== null) {
//         current = current.left;
//     }
//     return current.data;
// };
// BST.prototype.getMin = function() { // book implementation
//     var current = this.root;
//     while (current.left !== null) {
//         current = current.left;
//     }
//     return current.data;
// };
// BST.prototype.getMax = function() {
//     var current = this.root;
//     while (current.right !== null) {
//         current = current.right;
//     }
//     return current.data;
// };
// BST.prototype.find = function (data) {
//     var current = this.root;
//     while (current && current.data !== data) {
//         if (data < current.data) {
//             current = current.left;
//         } else {
//             current = current.right;
//         }
//     }
//     return current;
// };
// BST.prototype.remove = function (data) {
//     this.root = this.removeNode(this.root, data);
// };
// BST.prototype.removeNode = function (node, data) {
//     if (node === null) {
//         return null;
//     }
//     if (data === node.data) {
//         // node has no children
//         if (node.left === null && node.right === null) {
//             return null;
//         }
//         // node has no left child
//         if (node.left === null) {
//             return node.right;
//         }
//         // node has no right child
//         if (node.right === null) {
//             return node.left;
//         }
//         // node has two children
//         var tempNode = this.getSmallest(node.right);
//         node.data = tempNode.data;
//         node.right = this.removeNode(node.right, tempNode.data);
//         return node;
//     } else if (data < node.data) {
//         node.left = this.removeNode(node.left, data);
//         return node;
//     } else {
//         node.right = this.removeNode(node.right, data);
//         return node;
//     }
// };
// BST.prototype.nodeCount = function (node) {
//     var nCount = 0;
//     var counter = function (node) {
//         if (node !== null) {
//             nCount++;
//             this.inOrder(node.left);
//             this.inOrder(node.right);
//         }
//     };

//     counter(this.root);

//     return nCount;
// };

// // 1. Add a function to the BST class that counts the number of nodes in a BST.
// // http://analgorithmaday.blogspot.com/2011/06/counting-number-of-nodes-in-binary-tree.html

// setup nums BST for testing
// // ****************
// var nums = new BST();
// nums.insert(23);
// nums.insert(45);
// nums.insert(16);

// console.log( nums.nodeCount() );

// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
// // *****************

// // Test numNodes()
// //console.log('nodeCount() is: ' + nums.nodeCount(nums));


// // nums.insert(45);
// // nums.insert(1





// // setup nums BST for testing
// // ****************
// var nums = new BST();
// nums.insert(23);
// nums.insert(45);
// nums.insert(16);
// nums.insert(37);
// nums.insert(3);
// nums.insert(99);
// nums.insert(22);
// ///*****************


// // TEST find()
// nums.inOrder(nums.root); // display the nums in order

// // console.log("going to:   find(37)");
// // var found = nums.find(37);
// // if (found !== null) {
// //     console.log("Found " + 37 + " in the BST.");
// // } else {
// //     console.log(37 + " was not found in the BST.");
// // }

// // // TEST getMin and getMax
// // var min = nums.getMin();
// // console.log('getMin() return: ' + min);        // 3
// // var max = nums.getMax();
// // console.log("getMax() return: " + max);     // 99

// // INORDER TEST
// // Inorder traversal of BST
// // var nums = new BST();

// // console.log("inOrder traversal: ");
// // nums.inOrder(nums.root);
// // console.log('\n');

// // console.log("preOrder traversal: ");
// // nums.preOrder(nums.root);
// // console.log('\n');

// // console.log("postOrder traversal: ");
// // nums.postOrder(nums.root);
// // console.log('\n');
