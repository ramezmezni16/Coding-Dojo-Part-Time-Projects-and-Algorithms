// Node class
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Singly Linked List (SLL) class
class SLL {
    constructor() {
        this.head = null;
    }

    // Add Front
    addFront(value) {
        const newNode = new Node(value);
        newNode.next = this.head;  
        this.head = newNode; 
        return this.head;
    }

    // Remove Front
    removeFront() {
        if (!this.head) return null; 
        this.head = this.head.next;
        return this.head; 
    }

    // Front
    front() {
        if (!this.head) return null;
        return this.head.data;
    }
}
