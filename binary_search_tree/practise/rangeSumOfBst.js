/**
 * Problem: Given the root node of a binary search tree and two integers low and high,
 * return the sum of values of all nodes with a value in the inclusive range [low, high].
 * Link: https://leetcode.com/problems/range-sum-of-bst/
 */

const BST = require("../bst");
const BstTraversal = require("../bstTraversal");


/**
 * Time Complexity: O(N), where N is the number of nodes in the tree.
 *
 * Space Complexity: O(N)
 *
 * For the recursive and iterative implementations, we are performing a DFS (Depth-First Search) traversal.
 * The recursive solution requries additional space to maintain the function call stack
 * while the iterative solution requires additional space to maintain the stack.
 * In both implementations, the worst-case scenario occurs when the tree is of chain shape, and we will reach all the way down to the leaf node.
 * In this case, the space required for the stack is O(N).
 * @param inputArray
 * @param low
 * @param high
 * @returns {number}
 */
let rangeSumOfBstRecursion = function (inputArray, low, high) {
    const bst = new BST();
    let ans = 0;
    inputArray.forEach(i => {
        bst.add(i);
    });
    dfs(bst.root, low, high);
    return ans;

    function dfs(node, low, high) {
        if (node && low <= node.data && node.data <= high) {
            ans += node.data;
        }
        if (node && low < node.data) dfs(node.left, low, high);
        if (node && node.data < high) dfs(node.right, low, high);
    }
};

let rangeSumOfBstByInorderTraversal = function (inputArray, low, high) {
    const traversal = new BstTraversal();
    let ans = 0;
    inputArray.forEach(i => {
        traversal.add(i);
    });
    let inorderList = traversal.inOrder();

    inorderList.forEach(i => {
        if (i >= low && i <= high && i) {
            ans = ans + i;
        }
    });
    return ans;

}

console.log("Result ===> ", rangeSumOfBstRecursion([10, 5, 15, 3, 7, null, 18], 7, 15));
console.log("Result ===> ", rangeSumOfBstRecursion([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10));

console.log("Result ===> ", rangeSumOfBstByInorderTraversal([10, 5, 15, 3, 7, null, 18], 7, 15));
console.log("Result ===> ", rangeSumOfBstByInorderTraversal([10, 5, 15, 3, 7, 13, 18, 1, null, 6], 6, 10));