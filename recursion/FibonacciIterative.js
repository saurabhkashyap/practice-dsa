/**
 * f(n) = f(n-1) + f(n-2) if n > 1
 *      = n if n = 0,1
 *
 * f(2) = f(1) + f(0)
 * f(3) = f(2) + f(1)
 * @param number
 */
let fibonacciIterative = function (number){
    if (number <= 1) return number;

    let f1 = 1, f2 = 0, f;
    for(let i = 2; i<= number; i++){
        f = f1 + f2;
        f2 = f1;
        f1 = f;
    }
    return f;
}

let startTime = Date.now();
console.log(fibonacciIterative(40));
let endTime = Date.now();
console.log("FibonacciIterative Took " + (endTime - startTime) + ' ms');