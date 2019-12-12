//Stack
//Time Complexity: O(1)
//Space Complexity: O(N)
//Reference: https://www.youtube.com/watch?v=1AJ4ldcH2t4

// //BUILT IN JS METHODS
// const stack = [];

// //Push (add)
// stack.push('dog');
// stack.push('cat');
// stack.push('bear');

// //Pop (remove)
// stack.pop();

// //Peek (see last element)
// stack[stack.length - 1];
// console.log(stack);


//JS CLASSES
class Stack {
    constructor() {
        this.storage = {};
        this.size = 0;
    }

    push(element) {
        this.size++;
        this.storage[this.size] = element;
    }

    pop() {
        let removed = this.storage[this.size];
        delete this.storage[this.size];
        this.size--;
        return removed;
    }

    peek() {
        return this.storage[this.size];
    }
}

const stack = new Stack();

stack.push('dog');
stack.push('cat');
stack.push('bear');

console.log(stack);

stack.pop();

console.log(stack);