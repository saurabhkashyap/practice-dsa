/**
 * f(n) = f(n-1) + f(n-2) if n > 1
 *      = n if n = 0,1
 *
 * f(2) = f(1) + f(0)
 * f(3) = f(2) + f(1)
 * @param number
 */
let fibonacciRecursion = function (number){
    if (number <= 1) return number;

    return fibonacciRecursion(number-1) + fibonacciRecursion(number - 2);
}

let startTime = Date.now();
console.log(fibonacciRecursion(40));
let endTime = Date.now();
console.log("fibonacciRecursion Took " + (endTime - startTime) + ' ms');