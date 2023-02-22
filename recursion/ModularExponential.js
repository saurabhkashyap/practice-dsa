/**
 * x^n % m = ((x^n/2 % m) * (x^n/2 % m)) % m if n is even
 * x^n % m = ((x % m) * (x^(n-1) % m)) % m if n is odd
 * x^n % m = 1 if n = 0
 * Time Complexity O(log n)
 * @param x
 * @param n
 */
let modularExponential = function (x, n, m){
    if (n === 0) return 1;

    let y = modularExponential(x, n/2, m);
    if (n % 2 === 0) {
        return (y * y) % m;
    }else {
        // return ((x % m) * modularExponential(x, n-1, m)) % m;
        return (x * y * y) % m;
    }
}

let startTime = Date.now();
console.log(modularExponential(2, 100, 3));
let endTime = Date.now();
console.log("modularExponential Took " + (endTime - startTime) + ' ms');