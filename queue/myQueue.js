/**
 * Queue is known as FIFO (First In, first out)
 */
let myQueue = function (){
    let items = [];

    this.print = function (){
        console.log(items.toString())
    }

    /**
     * This method returns how many items there are inside a queue
     * @returns {number}
     */
    this.size = function () {
        return items.length;
    }

    /**
     * This method returns if the queue contains or not contains items inside
     * @returns {boolean}
     */
    this.isEmpty = function () {
        return items.length === 0;
    }

    /**
     * This method allows us to add a new item as the last element of a queue
     * @param item
     */
    this.enqueue = function (item) {
        items.push(item);
    }

    /**
     * This method allows us to remove the first element of a queue
     * Shift (remove) the first element of the array
     * @returns {T}
     */
    this.dequeue = function (){
        return items.shift();
    }

    /**
     * This method returns the first element of a queue
     * @returns {*}
     */
    this.peek = function () {
        if(items.length > 0){
            return items[0]
        }
    }
}

let q = new myQueue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.peek());
q.print();
