'use strict';
// countNodes.js - contains the stand alone countNodes function.
// we require this in to use it in other locations.

var countNodes = function(node) {   // start with root node
  if (node.data === null) {
    return 0;
  } else {
    if (node.left === null && node.right === null) {
      return 1;
    } else {
      return countNodes(node.left) + countNodes(node.right) + 1;
    }
  }
};

module.exports = countNodes;


