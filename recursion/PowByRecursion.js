/**
 * x^n = x * x^(n-1) if n > 0
 * x^n = 1 if n = 0
 * Time Complexity: O(n)
 * @param x
 * @param n
 */
let powByRecursion = function (x, n){
    if (n === 0) return 1;

    return x * powByRecursion(x, n-1);
}

let startTime = Date.now();
console.log(powByRecursion(2, 100));
let endTime = Date.now();
console.log("powByRecursion Took " + (endTime - startTime) + ' ms');