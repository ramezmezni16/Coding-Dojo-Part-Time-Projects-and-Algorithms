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
        let Count = 0;
        let cNode = this.head;
        while (cNode) {
            Count++;
            cNode = cNode.next;
        }
        return Count;
    }
}