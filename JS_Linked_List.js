//Linked List
//Time Complexity: O(N) [Search], O(1) [Append, Prepend, Delete]
//Space Complexity: O(N)
//Reference: https://www.youtube.com/watch?v=ChWWEncl76Y

class LinkedList {
    constructor() {
        this.head = this.tail = null;
    }

    //Add to end of the list (tail)
    append(value) {
        //if list is empty
        if (!this.tail) {
            this.head = this.tail = new Node(value);
        } else {
            let oldTail = this.tail;
            this.tail = new Node(value);
            oldTail.next = this.tail;
            this.tail.prev = oldTail;
        }
    }

    //Add to beginning of the list (head)
    prepend(value) {
        //if list is empty
        if (!this.head) {
            this.head = this.tail = new Node(value);
        } else {
            let oldHead = this.head;
            this.head = new Node(value);
            oldHead.prev = this.head;
            this.head.next = oldHead;
        }
    }

    deleteHead() {
        if (!this.head) {
            return null;
        } else {
            let removedHead = this.head;
            //if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.head = this.head.next;
                this.head.prev = null;
            }
            return removedHead.value;
        }
    }

    deleteTail() {
        //if list is empty
        if (!this.tail) {
            return null;
        } else {
            let removedTail = this.tail;
            //if 1 node left
            if (this.head === this.tail) {
                this.head = this.tail = null;
            } else {
                this.tail = this.tail.prev;
                this.tail.next = null;
            }
            return removedTail.value;
        }
    }
    
    search(value) {
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                return currentNode;
            }
            currentNode = currentNode.next;
        }

        return null;
    }
}

class Node {
    constructor(value, prev, next) {
        this.value = value;
        this.prev = prev || null;
        this.next = next || null;
    }
}

let list = new LinkedList();

list.append(1);
list.append(2);
list.append(3);

console.log(list);

list.prepend(0);
list.prepend(-1);

console.log(list.search(2));