class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(data) {
        let newNode = new Node(data);
        if (!this.top) this.top = newNode;
        else {
            newNode.next = this.top;
            this.top = newNode;
        }
    }

    pop() {
        if (this.top) {
            this.top = this.top.next;
        } else {
            return;
        }
    }

    printStack() {
        let curr = this.top, str = "";
        while (curr) {
            str += curr.data + " ";
            curr = curr.next;
        }
        return str;
    }
}

let mySTack = new Stack();
mySTack.push(2);
mySTack.push(4);
console.log(mySTack.printStack());
mySTack.pop();
console.log(mySTack.printStack());
