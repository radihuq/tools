//Queue
//Time Complexity: O(1)
//Space Complexity: O(N)
//Reference: https://www.youtube.com/watch?v=1AJ4ldcH2t4

// //BUILT IN JS METHODS
// const queue = [];

// //enqueue
// queue.push('seahorse');
// queue.push('dolphin');
// queue.push('whale shark');

// //dequeue
// queue.shift();
// console.log(queue);


//JS CLASSES
class Queue {
    constructor() {
        this.storage = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.storage[this.tail] = element;
        this.tail++;
    }

    dequeue() {
        let removed = this.storage[this.head];
        delete this.storage[this.head];
        this.head++;
        return removed;
    }
}

const queue = new Queue();

queue.enqueue('seahorse');
queue.enqueue('dolphin');
queue.enqueue('whale shark');
console.log(queue);

queue.dequeue();
console.log(queue);