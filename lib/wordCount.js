// Write a program that stores the words from a large text file in a BST
// and displays the number of times each word occurs in the text.
var BST = require('./bst.js');
var fs = require('fs');

BST.prototype.showWords = function (node) {
  if (node !== null) {
    this.showWords(node.left);
    console.log(node.data + ' ' + node.count);
    this.showWords(node.right);
  }
};

// get the file, and get it into an array of string-words
// var filePath = './simpleTest.txt';
var filePath = './testtextfile.txt';
var contents = fs.readFileSync(filePath).toString();
var stringArr = contents.split(' ');

var myBST = new BST();

for (var i=0; i<stringArr.length; i++){
  var word = stringArr[i].trim();         // TODO:  improve'd trimming !  accepting for now.
  var aNode = myBST.find(word);

  if ( aNode !== null ) {  // then word exists in BST already,
    aNode.count++;             // node count ++ on that one
  }
  else {                    // then word dne in BST, so add it now!
    myBST.insert(word);
  }
}

myBST.showWords(myBST.root);




// a forEach method, untested.
// stringArr.forEach(function (word) {
//   var aNode = myBST.find(word);     // IF in BST, aNode = THE Node, IF NOT in BST, aNode = null.

//   if ( aNode !== null ) {  // then word exists in BST already,
//     aNode.count++;             // node count ++ on that one
//   }
//   else {                    // then word dne in BST, so add it now!
//     myBST.insert(word);
//   }
// });







