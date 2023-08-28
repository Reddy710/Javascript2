class treeNode{
    constructor(data)
    {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
let root = new treeNode(5);
let l1 = new treeNode(3);
let r1 = new treeNode(4);
root.left = l1;
root.right = r1;
let l2 = new treeNode(6);
l1.left = l2;

console.log(root);