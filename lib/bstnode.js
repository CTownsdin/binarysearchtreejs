'use strict';
// bstnode.js - contains the Node CTor, and Node.show()

var Node = function (data, left, right) {
    this.data = data;
    this.count = 1;
    this.left = left;
    this.right = right;
};
Node.prototype.show = function () {
    return this.data;
};
Node.prototype.showCount = function () {
    return (this.count);
};

module.exports = Node;
