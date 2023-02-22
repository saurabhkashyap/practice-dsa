class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /**
     * Add an element at the end of the list
     * @param element
     */
    add(element) {
        // Create new node
        let node = new Node(element);

        // variable to store current node
        let current;

        // If the list is empty add it and make it HEAD
        if(!this.head) {
            this.head = node;
        }else {
            current = this.head;
            // Iterate to the end of the list
            while (current.next){
                current = current.next;
            }

            // Add node
            current.next = node
        }
        this.size++;
    }

    addAtIndex(element, index){
        let node = new Node(element);
        let current = this.head;
        let previous;

        if(index < 0 || index > this.size){
            console.log("Please enter valid index");
            return;
        }else{
            if(index === 0){
                node.next = this.head;
                this.head = node;
            }else {
                current = this.head;
                for(let i =0; i<index; i++){
                    previous = current;
                    current = current.next;
                }
                node.next = current;
                previous.next = node;
            }
            this.size++;
        }

    }

    removeFromIndex(index){
        if(index < 0 || index >= this.size){
            console.log("Please enter valid index");
        }else {
            let current = this.head,
                previous;
            for(let i=0; i< index; i++){
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
            this.size--;
        }
    }

    reverseIterative(){
        let current = this.head, previous = null, next;
        while(current !== null){
            next = current.next;
            current.next = previous;
            previous = current;
            current = next;
        }
        this.head = previous;
    }

    reverseRecursion(head) {
        if(head == null || head.next == null){
            return head;
        }

        let rest = this.reverseRecursion(head.next);
        head.next.next = head;
        head.next = null;

        return rest;
    }

    printListReverseByRecursion(node){
        if(node === null) {
            return;
        }
        this.printListReverseByRecursion(node.next);
        console.log(node.element);
    }

    printListByRecursion(node, str){
        if(node === null) {
            console.log(str)
            return;
        }
        str+=node.element + " ";
        this.printListByRecursion(node.next, str);
    }

    printList(){
        let current = this.head;
        let str = "";
        while (current){
            str += current.element + " ";
            current = current.next;
        }
        console.log(str);
    }
}

let linkedList = new LinkedList();
linkedList.add(2);
linkedList.add(12);
linkedList.add(5);
linkedList.add(6);
linkedList.add(3);
linkedList.add(5);
linkedList.add(11);
linkedList.add(12);
linkedList.add(14);
linkedList.add(23);
linkedList.add(22);
linkedList.add(26);
linkedList.add(46);
linkedList.add(56);
linkedList.add(16);
linkedList.add(86);
linkedList.add(96);
linkedList.add(116);
// linkedList.printList();
// linkedList.addAtIndex(1, 0);
// linkedList.printList();
// linkedList.addAtIndex(4, 3);
linkedList.printList();
// linkedList.printListByRecursion(linkedList.head, "");
// linkedList.printListReverseByRecursion(linkedList.head);
// linkedList.removeFromIndex(5);
// linkedList.printList();
// let startTime1 = Date.now();
// linkedList.reverseIterative();
// let endTime1 = Date.now();
// console.log("reverseIterative taking time " + (endTime1 - startTime1)+ " ms");
// linkedList.printList();
linkedList.head = linkedList.reverseRecursion(linkedList.head);
linkedList.printList()
