class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class SLL {
    constructor() {
        this.head = null;
    }
    length() {
        let count = 0;
        let cNode = this.head;
        while (cNode) {
            count++;
            cNode = cNode.next;
        }
        return count;
    }
}