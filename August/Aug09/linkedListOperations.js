class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}
function createLl(x) {
    let n1 = new Node(x);
    return n1;
}
let head = createLl('a');
console.log(head);
