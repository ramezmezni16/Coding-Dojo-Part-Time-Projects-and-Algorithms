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
    contains(value) {
        let cNode = this.head;
        while (cNode) {
            if (cNode.value === value) {
                return true;
            }
            cNode = cNode.next;
        }
        return false;
    }
}
