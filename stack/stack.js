/* STACK */
/* LAST IN FIRST OUT */
let Stack = function () {
    this.count = 0;
    this.storage = {};

    /**
     * Method to push item into stack
     * push one item and increment the count which will be pointer to end of the stack to add new
     * @param value
     */
    this.push = function (value){
        this.storage[this.count] = value;
        this.count++;
    }

    /**
     * Method to pop off the end item from the stack
     * if stack is empty it return undefined
     * it decrement count to point to end item of the stack
     * @returns {undefined|*}
     */
    this.pop = function (){
        if(this.count ===  0){
            return undefined
        }

        this.count--;
        let result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    /**
     * Method to get size of the stack
     * @returns {number}
     */
    this.size = function (){
        return this.count;
    }

    /**
     * Method to get the value at the end of the stack
     * @returns {undefined|*}
     */
    this.peek = function (){
        if(this.count ===  0){
            return undefined
        }
        return this.storage[this.count-1]
    }

    this.view = function (){
        return this.storage;
    }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.peek());
myStack.pop();
console.log(myStack.peek());