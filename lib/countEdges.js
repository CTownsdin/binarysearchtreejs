'use strict';
var countNodes = require('./countNodes');

var countEdges = function(node){
  return countNodes(node) -1;
};

module.exports = countEdges;
