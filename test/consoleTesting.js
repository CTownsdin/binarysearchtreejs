var BST = require('../lib/bst');
var countNodes = require('../lib/countNodes.js');
//var countEdges = require('../lib/countEdges.js');

var myBST = new BST();
myBST.insert(23);
myBST.insert(56);
myBST.insert(32);
myBST.insert(78);
myBST.insert(2);

// countNodes()
// console.log(myBST.root);
console.log(countNodes(myBST.root));    // 5

// console.log(myBST.root.show2());

// BST.prototype.traverse
// console.log(myBST.traverse(function(){console.log('hi')}));  // hi hi hi hi hi undefined

// *failing*
// test:  BST.prototype.size = function () {
// console.log(myBST.size(myBST));     // 5 -- undefined

// test:  var countEdges = function(node){
// console.log(countEdges(myBST.root));

// test: a max() function on the BST class
// console.log(myBST.getMax());             // 78

// test: a min() function on the BST class
// console.log(myBST.getMin());              // 2

// test:  find something that is not there!
// console.log(myBST.find(999));         // returns: null !

// test:  what does inOrder output now?
// console.log(myBST.inOrder(myBST.root));
