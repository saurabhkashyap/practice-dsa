/**
 * n! = n*(n-1)! if n > 0
 * n! = 1 if n = 0          THIS IS THE BASE CONDITION
 * @param inputNumber
 * @returns {number}
 */
let factorial = function (inputNumber){
    console.log("Calculating F("+inputNumber+")");
    if (inputNumber === 0) return 1;                                    // BASE CONDITION
    let calculation = inputNumber * factorial(inputNumber-1);
    console.log("Done ! F("+inputNumber+") = "+calculation);
    return calculation;
}

factorial(5);