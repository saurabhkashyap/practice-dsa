const BstTraversal = require("../bstTraversal");

let sortArray = function (array) {
    const traversal = new BstTraversal();
    array.forEach(i => {
        traversal.add(i);
    });
    return traversal.inOrder();
};

console.log(sortArray([10, 5, 15, 3, 7, 18]))