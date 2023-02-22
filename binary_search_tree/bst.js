class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    /**
     * if there is no element in tree then root will be data with null left and right child
     * else check with parent data if it's greater than parent data
     ** if right child of current parent is null then new node with this data will be right child else
     * @param data
     */
    add(data) {
        const node = this.root;
        if (this.root === null) {
            this.root = new Node(data);
            return;
        } else {
            const searchTree = function (node) {
                if (data < node.data) {
                    if (node.left === null) {
                        node.left = new Node(data);
                        return;
                    } else {
                        return searchTree(node.left);
                    }
                } else if (data > node.data) {
                    if (node.right === null) {
                        node.right = new Node(data);
                        return;
                    } else {
                        return searchTree(node.right);
                    }
                } else{
                    return null;
                }
            }
            return searchTree(node);
        }
    }

    /**
     * In BST the left most node with left child null contains minimum value
     * @returns {*}
     */
    findMin() {
        let current = this.root;
        while (current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    /**
     * In BST the right most node with right child null contains maximum value
     * @returns {*}
     */
    findMax() {
        let current = this.root;
        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * 1. set current -> root
     * 2. if current_data not equal to data
     * 3. then if data less than the current data then current -> left
     * 4. and else if data greater than current data then current -> right
     * 5. perform 2,3,4 until data is found or current data is null i.e. not found
     * @param data
     * @returns {null}
     */
    find(data) {
        let current = this.root;
        while (current.data !== data) {
            if(data < current.data){
                current = current.left;
            }else if(data > current.data){
                current = current.right;
            }else if(current.data === null){
                return null;
            }
        }
        return current;
    }

    isPresent(data) {
        let current = this.root;
        while (current){
            if(current.data === data){
                return true;
            }else if(current.data > data){
                current = current.left;
            }else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = BST;