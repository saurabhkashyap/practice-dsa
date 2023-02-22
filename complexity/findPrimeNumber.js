class FindPrimeNumber {
    constructor(num) {
        this.number = num;
    }

    methodI() {
        let foundPrime = false;
        let startTime = Date.now();
        for(let i=2; i<this.number; i++){
            if(this.number % i === 0){
                foundPrime = false;
                break;
            }else{
                foundPrime = true;
            }
        }
        let endTime = Date.now();
        if(foundPrime) {
            console.log(this.number+ " is a prime number & search took "+ (endTime - startTime) + ' ms');
        }else {
            console.log(this.number+ " is not a prime number & search took "+ (endTime - startTime)+ ' ms');
        }
    }

    methodII() {
        let foundPrime = false;
        let startTime = Date.now();
        for(let i=2; i<=Math.sqrt(this.number); i++){
            if(this.number % i === 0){
                foundPrime = false;
                break;
            }else{
                foundPrime = true;
            }
        }
        let endTime = Date.now();
        if(foundPrime) {
            console.log(this.number+ " is a prime number & search took "+ (endTime - startTime) + ' ms');
        }else {
            console.log(this.number+ " is not a prime number & search took "+ (endTime - startTime)+ ' ms');
        }
    }
}

let findPrime = new FindPrimeNumber(1000003);
findPrime.methodII();
findPrime.methodI();