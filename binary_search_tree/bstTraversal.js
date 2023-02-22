class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BstTraversal {
    constructor() {
        this.root = null;
    }

    add(data) {
        const node = this.root;
        if (this.root === null) {
            this.root = new Node(data);

        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);

                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);

                    } else {
                        return searchTree(node.right);
                    }
                } else {
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    /**
     * Distance from the root node to the first leaf node without 2 children
     */
    findMinHeight(node = this.root) {
        if (node === null) {
            return -1;
        }

        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);

        if (left < right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    findMaxHeight(node = this.root) {
        if (node === null) {
            return -1;
        }

        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);

        if (left > right) {
            return left + 1;
        } else {
            return right + 1;
        }
    }

    inOrder() {
        if (this.root === null) return null;
        else {
            let result = [];

            function inOrderTraversal(node) {
                node.left && inOrderTraversal(node.left);
                result.push(node.data);
                node.right && inOrderTraversal(node.right);
            }

            inOrderTraversal(this.root);
            return result;
        }
    }

    preOrder() {
        if (this.root === null) return null;
        else {
            let result = [];

            function preOrderTraversal(node) {
                result.push(node.data);
                node.left && preOrderTraversal(node.left);
                node.right && preOrderTraversal(node.right);
            }

            preOrderTraversal(this.root);
            return result;
        }
    }

    postOrder() {
        if (this.root === null) return null;
        else {
            let result = [];

            function postOrderTraversal(node) {
                node.left && postOrderTraversal(node.left);
                node.right && postOrderTraversal(node.right);
                result.push(node.data);
            }

            postOrderTraversal(this.root);
            return result;
        }
    }

    levelOrder() {
        let result = [];
        let Q = [];

        if (this.root !== null) {
            Q.push(this.root);
            while (Q.length > 0) {
                let node = Q.shift();
                result.push(node.data);
                if (node.left !== null) Q.push(node.left);
                else if (node.right !== null) Q.push(node.right);
            }
            return result;
        } else return null;
    }
}

module.exports = BstTraversal;

// const bst = new BstTraversal();
//
// bst.add(9);
// bst.add(4);
// bst.add(17);
// bst.add(3);
// bst.add(6);
// bst.add(22);
// bst.add(5);
// bst.add(7);
// bst.add(20);
//
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// bst.add(10);
// console.log(bst.findMinHeight());
// console.log(bst.findMaxHeight());
// console.log('inOrder: ' + bst.inOrder());
// console.log('preOrder: ' + bst.preOrder());
// console.log('postOrder: ' + bst.postOrder());
// console.log('levelOrder: ' + bst.levelOrder());