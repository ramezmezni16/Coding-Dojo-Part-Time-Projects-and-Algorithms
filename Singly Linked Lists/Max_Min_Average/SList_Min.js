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
    min() {
        if (!this.head) return null;
        let minValue = this.head.value;
        let cNode = this.head.next;
        while (cNode) {
            if (cNode.value < minValue) {
                minValue = cNode.value;
            }
            cNode = cNode.next;
        }
        return minValue;
    }
}