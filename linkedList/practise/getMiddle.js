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

    add(element) {
        let node = new Node(element), current;
        if(!this.top) {
            this.top = node;
        }else {
            current = this.top;
            while (current.next){
                current = current.next;
            }
            current.next = node
        }
    }
    getMiddle(node)
    {
        if (!node) return -1;
        else {
            let current = node, size = 0;
            while(current.next){
                size++;
                current = current.next;
            }
            for(let i=0; i<Math.ceil(size/2); i++){
                node = node.next;
            }
            return node.data;
        }
    }

    getMiddleII(node){
        if(!node && !node.next) return node;
        else{
            let fast, slow;
            fast = slow = node;
            while (fast.next && fast.next.next){
                fast = fast.next.next;
                slow = slow.next;
            }
            return fast.next ? slow.next.data : slow.data;
        }
    }

    printList(node, str){
        if(!node){
            console.log(str);
            return
        };
        str+=node.data + " ";
        this.printList(node.next, str);
    }
}

let linkedList = new Solution();
linkedList.add(12);
linkedList.add(5);
linkedList.add(6);
linkedList.add(3);
linkedList.add(5);
// linkedList.add(1);
linkedList.printList(linkedList.top, "");
console.log(linkedList.getMiddleII(linkedList.top));