/**
 * Given the root of a binary search tree, rearrange the tree in in-order so that the leftmost node in the tree is now the root of the tree,
 * and every node has no left child and only one right child.
 * https://leetcode.com/problems/increasing-order-search-tree/
 */

const BST = require("../bst");
const BstTraversal = require("../bstTraversal");

class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const increasingBST = function(inputArray) {
    const bst = new BstTraversal();
    let ans = 0;
    inputArray.forEach(i => {
        bst.add(i);
    });
    let inorderList = bst.inOrder();
    inorderList = inorderList.filter(i=> i !== null);


    function add(data){
        const node = this.root;
        if (this.root === null) {
            this.root = new Node(data);

        } else {
            const searchTree = function (node) {
                if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);

                    } else {
                        return searchTree(node.right);
                    }
                }else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    console.log(inorderList);
};

increasingBST([5,3,6,2,4,null,8,1,null,null,null,7,9]);