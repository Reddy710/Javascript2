// class Stack{
//     constractor(){
//         this.storage = [];
//     }
//     push(data)
//     {
//         this.storage.push(data);
//     }
//     pop()
//     {
//         if(this.storage.length === 0)
//         {
//             return null;
//         }else{
//             return this.storage.pop();
//         }
//     }

// }
// const my_stack = new Stack();

// my_stack.push(1);
// my_stack.push(2);
// my_stack.push(3);
// console.log(my_stack);


// class Stack {
//     constructor() {
//         this.storage = [];
//     }

//     push(data) {
//         this.storage.push(data);
//     }

//     pop() {
//         if (this.storage.length === 0) {
//             return null; // Corrected "none" to "null"
//         } else {
//             return this.storage.pop();
//         }
//     }
// }

// const my_stack = new Stack(); // Corrected "stack" to "Stack"

// my_stack.push(1);
// my_stack.push(2);
// my_stack.push(3);
// console.log(my_stack.pop());

class Stack {
    constructor() {
        this.storage = [];
        // this.push = this.push.bind(this); // Bind push method to the instance
        // this.pop = this.pop.bind(this);   // Bind pop method to the instance
    }

    push(data) {
        this.storage.push(data);
    }

    pop() {
        if (this.storage.length === 0) {
            return null;
        } else {
            return this.storage.pop();
        }
    }
    top() {
        if (this.storage.length === 0) {
            return null;
        } else {
            return this.storage[this.storage.length - 1];
        }

    }
}

const my_stack = new Stack();

my_stack.push(8);
my_stack.push(2);
my_stack.push(6);
console.log(my_stack.top());




