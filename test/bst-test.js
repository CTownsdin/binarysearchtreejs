'use strict';
var expect = require('chai').expect;
var BST = require('../lib/bst');
var countNodes = require('../lib/countNodes');

// basic chai testing, just the concept, works!

describe('BST test', function() {

  var myBST;

  beforeEach(function() { myBST = new BST(); });

  it('can insert a node', function () {
    myBST.insert('5');
    expect(myBST.root).to.have.property('data');
  });

  it('can count the number of nodes inserted', function () {
    myBST.insert(23);
    myBST.insert(56);
    myBST.insert(32);
    myBST.insert(78);
    myBST.insert(2);

    expect(countNodes(myBST.root)).to.equal(5);
  });

});
