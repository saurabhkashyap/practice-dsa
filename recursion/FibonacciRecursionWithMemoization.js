/**
 * f(n) = f(n-1) + f(n-2) if n > 1
 *      = n if n = 0,1
 *
 * f(2) = f(1) + f(0)
 * f(3) = f(2) + f(1)
 * @param number
 */
let F = [];
let fibonacciRecursionWithMemoization = function (number){
    if (number <= 1) return number;

    if(F[number]) {
        return F[number];
    }
    F[number] = fibonacciRecursionWithMemoization(number-1) + fibonacciRecursionWithMemoization(number - 2);

    return F[number];
}

let startTime = Date.now();
console.log(fibonacciRecursionWithMemoization(40));
let endTime = Date.now();
console.log("fibonacciRecursionWithMemoization Took " + (endTime - startTime) + ' ms');