class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Solution {
    constructor() {
        this.top = null;
    }

    add(data) {
        let node = new Node(data), current;
        if (!this.top) {
            this.top = node;
        } else {
            current = this.top;
            while (current.next) {
                current = current.next;
            }
            current.next = node
        }
    }

    printList(head){
        let current = head;
        let str = "";
        while (current){
            str += current.data + " ";
            current = current.next;
        }
        console.log(str);
    }

    reverse(head){
        let prev = null, curr, next;
        curr = next = head;
        while(curr){
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        return prev;
    }

    rotate(node, k) {
        let firstHead = new Node(-1), secondHead = new Node(-1), first = firstHead, second = secondHead;

        if(!node || !node.next)  return node;

        for(let i=0; i<k; i++){
            if(!node) break;
            first.next = node;
            first = first.next;
            node = node.next;
        }
        first.next = null;
        console.log("1st Part")
        this.printList(firstHead.next);

        while(node){
            second.next = node;
            second = second.next;
            node = node.next;
        }
        console.log("2nd")
        this.printList(secondHead.next);
        second.next = firstHead.next;
        this.printList(secondHead.next);
    }

    segregate(node, k) {
        let firstHead = new Node(-1);
        let secondHead = new Node(-1);
        let first = firstHead;
        let second = secondHead;

        if(!node || !node.next) {
            return node;
        }
        
        for(let i=0; i<k; i++){
            if(!node) break;
            first.next = node;
            first = first.next;
            node = node.next;
        }
        first.next = null;
        console.log("1st Part")
        this.printList(firstHead.next);
        console.log("1st Part in reverse order")
        let firstRev = this.reverse(firstHead.next);
        this.printList(firstRev);
        while(node){
            second.next = node;
            second = second.next;
            node = node.next;
        }
        console.log("2nd")
        this.printList(secondHead.next);
        console.log("2nd Part in reverse order")
        let secondRev = this.reverse(secondHead.next);
        this.printList(secondRev);
        let mergeHead = firstRev;
        while(firstRev.next){
            firstRev = firstRev.next;
        }
        firstRev.next = secondRev;
        this.printList(mergeHead);
    }

    addTwoLists(first, second)
    {
        //your code here
        let firstDecimal="", secondDecimal="", finalDecimal;
        while(first){
            firstDecimal+=first.data;
            first = first.next;
        }
        while(second){
            secondDecimal+=second.data;
            second = second.next;
        }
        console.log(firstDecimal, secondDecimal)
        finalDecimal = (Number(firstDecimal)+ Number(secondDecimal)).toString();
        console.log(finalDecimal)

        let newNode = new Node(-1), head = newNode;
        for (let i = 0, len = finalDecimal.length; i < len; i += 1) {
            newNode.next = new Node(-1);
            newNode = newNode.next;
            newNode.data = Number(finalDecimal.charAt(i));
        }
        return head.next;
    }
}

let linkedList = new Solution();
linkedList.add(12);
linkedList.add(5);
// linkedList.add(6);
// linkedList.add(3);
// linkedList.add(5);
// linkedList.add(1);
// linkedList.printList(linkedList.top);
// linkedList.rotate(linkedList.top, 3);
let linkedList2 = new Solution();
linkedList2.add(2);
linkedList2.add(5);
linkedList2.printList(linkedList2.addTwoLists(linkedList.top, linkedList2.top));