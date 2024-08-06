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
    average() {
        if (!this.head) return null;
        let sum = 0;
        let count = 0;
        let cNode = this.head;
        while (cNode) {
            sum += cNode.value;
            count++;
            cNode = cNode.next;
        }
        return sum / count;
    }
}