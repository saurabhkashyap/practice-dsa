/**
 * 1. start -> 0
 * 2. end -> last index of sorted array
 * 3. middle -> round down to find the middle index
 * 4. check until start and end not same or start less than end
 * 5. if middle_values equals to target we found the target
 * 6. if middle_value > target then end will be previous index of middle
 * 7. else if middle_value > target then start will be next index of middle
 * @param sorted_items
 * @param target
 * @returns {boolean}
 */
let binarySearchIterative = function (sorted_items, target) {
    let start = 0;
    let end = sorted_items.length - 1;

    // Iterate as long as the beginning does not encounter the end.
    while (start <= end) {
        // find out the middle index
        let middle = Math.floor((start + end) / 2);

        if (sorted_items[middle] === target) {
            return true;
        } else if (sorted_items[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }
    return false;
};


let binarySearchRecursive = function (sorted_items, target, start, end) {
    // here is the base condition
    if (start > end) return false;

    // find the middle index
    let middle = Math.floor((start + end) / 2);

    // Compare the middle to the given key target.
    if (sorted_items[middle] === target) return true;

    // If the element in the middle is greater than the target, look in the left half of the middle.
    // If the element in the middle is smaller than the target, look in the right half of the middle.
    if (sorted_items[middle] > target) {
        return binarySearchRecursive(sorted_items, target, start, middle - 1);
    } else {
        return binarySearchRecursive(sorted_items, target, middle + 1, end);
    }
};

let sorted_arr = [2, 6, 8, 10, 12, 14];
let target = 9;

if (binarySearchIterative(sorted_arr, target))
    console.log("Target found!");
else console.log("Target not found!")

target = 14;

if (binarySearchIterative(sorted_arr, target))
    console.log("Target found!");
else console.log("Target not found!")

target = 14;
if (binarySearchRecursive(sorted_arr, target, 0, sorted_arr.length - 1))
    console.log("Target found!");
else console.log("Target not found!")