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
    max() {
        if (!this.head) return null;
        let maxValue = this.head.value;
        let cNode = this.head.next;
        while (cNode) {
            if (cNode.value > maxValue) {
                maxValue = cNode.value;
            }
            cNode = cNode.next;
        }
        return maxValue;
    }
}