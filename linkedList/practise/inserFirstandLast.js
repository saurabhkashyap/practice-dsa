class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Solution {
    //Function to insert a node at the beginning of the linked list.
    insertAtBegining(head, newData)
    {
        //your code here
        let newNode = new Node(newData);
        if(head){
            newNode.next = head.next;
            head.next = newNode;
        }else {
            head = newNode;
        }

    }
    //Function to insert a node at the end of the linked list.
    insertAtEnd(head, newData)
    {
        //your code here
        let newNode = new Node(newData);
        if(!head) head = newNode;
        else{
            let curr = head;
            while(curr.next){
                curr = curr.next;
            }
            curr.next = newNode;
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

let solution = new Solution();
solution.insertAtEnd()