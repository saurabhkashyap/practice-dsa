class Complexity {
    constructor(size) {
        this.theArray = new Array(size);
        this.arraySize = size;
        this.itemsInArray = 0;
        this.startTime = 0;
        this.endTime = 0;
    }

    getRandomArray() {
        this.theArray = Array.apply(null, Array(this.arraySize)).map(function () {
            return Math.round(Math.random() * 100);
        });

        this.itemsInArray = this.arraySize - 1;
    }


    /**
     * O(1) - Constant Complexity - Add an item to Array
     * @param newItem
     * @constructor
     */
    O_1(newItem) {
        this.theArray[this.itemsInArray++] = newItem;
    }

    /**
     * Liner Search for Value - Linear Complexity
     * 0(N) An algorithm that's time to complete will grow in direct proportion to the amount of data
     * The linear search is an example of this to find all values that match what we are searching for we will have to look in
     * exactly each item in the array. If we just wanted to find one match the Big O is the same because it describes the worst
     * case scenario in which the whole array must be searched
     * @param value
     * @constructor
     */
    O_N(value) {
        let valueInArray = false,
            indexWithValue = "";

        this.startTime = Date.now();
        for (let i = 0; i < this.arraySize; i++) {
            if (this.theArray[i] === value) {
                valueInArray = true;
                indexWithValue += i + " ";
            }
        }

        console.log("Value found: ", valueInArray);
        this.endTime = Date.now();
        console.log(`Linear Search Took ${(this.endTime - this.startTime)} ms for Array with size ${this.arraySize}`);

    }

    /**
     * Quadratic Complexity - Bubble sort
     * O(N^2) Time to complete will be proportional to the square of the amount of data (Bubble Sort)
     * Algorithms with more nested iterations will result in O(N^3), O(N^4), etc. performance
     * Each pass through the outer loop (0)N requires us to go through the entire list again so N multiplies against itself or it is squared
     * @constructor
     */
    O_N_POW_2() {
        this.startTime = Date.now();
        for (let i = this.arraySize - 1; i > 1; i--) {
            for (let j = 0; j < i; j++) {
                if (this.theArray[j] > this.theArray[j + 1])
                    this.swapValues(j, j + 1);
            }
        }
        this.endTime = Date.now();

        console.log("Sorted Array", this.theArray);
        console.log(`Quadratic Complexity - Bubble sort took ${(this.endTime - this.startTime)} ms for Array with size ${this.arraySize}`);
    }

    /**
     * Logarithmic Complexity - Binary Search
     * O (log N) Occurs when the data being used is decreased by roughly 50% each time through the algorithm.
     * Binary search is a perfect example of this.
     * Pretty fast because the log N increases at a dramatically slower rate as N increases
     * O (log N) algorithms are very efficient because increasing the amount of data has little effect at some point early
     * on because the amount of data is halved on each run through
     * @param value
     * @constructor
     */
    O_log_N(value) {
        this.startTime = Date.now();

        let lowIndex = 0,
            highIndex = this.arraySize - 1,
            timeThrough = 0;

        while (lowIndex <= highIndex) {
            let middleIndex = Math.round((highIndex + lowIndex) / 2);

            if (this.theArray[middleIndex] > value) {
                highIndex = middleIndex - 1;
            } else if (this.theArray[middleIndex] < value) {
                lowIndex = middleIndex + 1
            } else {
                console.log("Found a Match for " + value + " at Index " + middleIndex + " in Binary Search");
                lowIndex = highIndex + 1;
            }
            timeThrough++;
        }

        this.endTime = Date.now();
        console.log("Binary Search Took " + (this.endTime - this.startTime))
        console.log("Times through " + timeThrough)

    }

    // O (n log n) Most sorts are at least O(N) because
    // every element must be looked at, at least once.
    // The bubble sort is O(N^2)
    // To figure out the number of comparisons we need
    // to make with the Quick Sort we first know that
    // it is comparing and moving values very
    // efficiently without shifting. That means values
    // are compared only once. So each comparison will
    // reduce the possible final sorted lists in half.
    // Comparisons = log n! (Factorial of n)
    // Comparisons = log n + log(n-1) + .... + log(1)
    // This evaluates to n log n
    quickSort(start, end){
        if(start < end){
            let pivotIndex = this.partition(start, end);
            this.quickSort(start, pivotIndex-1);
            this.quickSort(pivotIndex+1, end);
        }
    }

    partition(start, end){
        let pivot = this.theArray[end];
        let pindex = start;

        for(let i=start; i<end; i++){
            if(this.theArray[i]<pivot){
                this.swapValues(i, pindex);
                pindex++
            }
        }
        this.swapValues(pindex, end);
        return pindex;
    }

    swapValues(indexOne, indexTwo) {
        let temp = this.theArray[indexOne];
        this.theArray[indexOne] = this.theArray[indexTwo];
        this.theArray[indexTwo] = temp;

    }


    merge(leftArray, rightArray, actualArray){
        let nL = leftArray.length,
            rL = rightArray.length,
            i = 0, j = 0, k = 0;

        while (i < nL && j < rL){
            if(leftArray[i] < rightArray[j]){
                actualArray[k] = leftArray[i];
                k++;
                i++;
            }else {
                actualArray[k] = rightArray[j];
                k++;
                j++;
            }
        }

        while (i < nL){
            actualArray[k] = leftArray[i];
            k++;
            i++;
        }

        while (j < rL){
            actualArray[k] = rightArray[j];
            k++;
            j++;
        }
    }

    mergeSort(arr){
        if (arr.length < 2) return arr;

        let middle = Math.round(arr.length/2),
        leftArray = [], rightArray = [];
        for (let i = 0; i< middle; i++){
            leftArray.push(arr[i]);
        }
        for (let i = middle; i< arr.length; i++){
            rightArray.push(arr[i]);
        }
        this.mergeSort(leftArray);
        this.mergeSort(rightArray);
        this.merge(leftArray, rightArray, arr);
    }
}

let testAlgo1 = new Complexity(1000);
testAlgo1.getRandomArray();
// testAlgo1.O_N(20);
let testAlgo2 = new Complexity(1000);
testAlgo2.getRandomArray();
// testAlgo2.O_N(20);
// testAlgo1.O_N_POW_2();
// testAlgo2.O_N_POW_2();
// testAlgo1.O_log_N(20);
// testAlgo2.O_log_N(20);
let startTime = Date.now();
testAlgo1.quickSort(0, testAlgo1.itemsInArray);
// testAlgo1.mergeSort(testAlgo1.theArray);
let endTime = Date.now();
console.log("Quick Sort Took " + (endTime - startTime) + ' ms');
console.log("Sorted Array", testAlgo1.theArray);