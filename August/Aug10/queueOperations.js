class Queue{
    constructor(){
        this.storage = [];
    }
    enqueue(data) {
        this.storage.push(data);
    }
    dequeue() {
        if (this.storage.length === 0) {
            return null;
        } else {
            return this.storage.pop();
        }
    }
    front() {
        if (this.storage.length === 0) {
            return null;
        } else {
            return this.storage[0];
        }
    }

    last() {
        if (this.storage.length === 0) {
            return null;
        } else {
            return this.storage[this.storage.length - 1];
        }
    }
}
const myqueue = new Queue();

myqueue.enqueue(1);
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(7);

console.log(myqueue.front());
