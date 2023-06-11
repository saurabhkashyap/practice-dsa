class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class StackByLinkList {
    constructor() {
        this.top = null;
        this.size = 0;
    }
    push(data) {
        let node = new StackNode(data);

        if(!this.top){
            this.top = node;
        }else {
            node.next = this.top;
            this.top = node;
        }
    }

    pop(){
        if(!this.top) return -1;
        else {
            let data = this.top.data;
            this.top = this.top.next;
            return data;
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


let linkedList = new StackByLinkList();
linkedList.push(2);
console.log(linkedList.pop());
console.log(linkedList.pop());
linkedList.push(12);
linkedList.push(5);
linkedList.push(6);
linkedList.push(3);
linkedList.push(5);
linkedList.push(11);
linkedList.push(12);
linkedList.push(14);
linkedList.printList(linkedList.top, "");
console.log(linkedList.pop());
linkedList.printList(linkedList.top, "");