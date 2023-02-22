/**
 * x^n = x^n/2 * x^n/2 if n is even
 * x^n = x * x^(n-1) if n is odd
 * x^n = 1 if n = 0
 * Time Complexity O(log n)
 * @param x
 * @param n
 */
let powByRecursionII = function (x, n){
    if (n === 0) return 1;

    // let y = powByRecursionII(x, Math.floor(n/2));
    if (n % 2 === 0) {

        let y = powByRecursionII(x, Math.floor(n/2));
        return y * y;
    }else {
        return x * powByRecursionII(x, n-1);
        // return x * y * y;
    }
}

let startTime = Date.now();
console.log(powByRecursionII(2, 99));
let endTime = Date.now();
console.log("powByRecursion Took " + (endTime - startTime) + ' ms');