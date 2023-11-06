class Node{
    constructor(data)
    {
        this.data = data
        this.next = null
    }
  
}
class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add(data){
        let node = new Node(data)
        let current;
        if(this.head == null)
            this.head = node;
        else{
            current = this.head;

            while(data.next){
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }

    insertAt(data, index) {
        if(index < 0 || index > this.size)
            return console.log("Please enter a valid index")
        else {
            let node = new Node(data);
            let curr, prev;

            curr = this.head;
            if (index == 0) {
                node.next = this.head
                this.head = node;
            }
            else{
                curr = this.head;
                let it = 0;

                while (it < index) {
                    it++;
                    prev = curr
                    curr = curr.next;
                }
                node.next = curr;
                prev.next = node;
            }
            this.size++;
        }
    }
    removeFrom(index) {
        if (index < 0 || index >= this.size)
            return console.log("Please enter a valid index");
        else {
            let curr, prev, it = 0;
            curr = this.head;
            prev = null;
    
            if (index === 0) {
                this.head = curr.next;
            } else {
                while (it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }
                prev.next = curr.next;
            }
            this.size--;
            return curr.data;
        }
    }    
    removeData(data){
        let current = this.head;
        let prev = null;

        while(current != null){
            if(current.data === data){
                if (prev == null){
                    this.head = current.next;
                }else{
                    prev.next = current.next;
                }
                this.size--;
                return current.data;
            }
            prev = current;
            current = current.next;
        }
        return -1
    }
    indexOf(data){
        let count = 0;
        let current = this.head;
        while(current != null){
            if (current.data === data)
                return count;
            count++;
            current = current.next;
        }
        return -1;
    }
    isEmpty(){
        return this.size == 0;
    }

    sizeOfList(){
        console.log(this.size)
    }
    printList(){
            let curr = this.head;
            let str = '';
            while(curr){
                str += curr.data + " ";
                curr = curr.next;
            }
            console.log(str);
        }
    }
let ll = new LinkedList();
console.log(ll.isEmpty());
ll.add(10);
ll.printList();
console.log(ll.sizeOfList());
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
ll.printList();
console.log("is element remove ?" + ll.removeData(50))
ll.insertAt(60,2);
ll.printList();
console.log("is List Empty ?" + ll.isEmpty());
console.log(ll.removeData(3));
ll.printList();
