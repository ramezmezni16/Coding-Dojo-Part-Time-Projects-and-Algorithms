class BTNode {
    constructor(value) {
        this.val = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }
    //Add
    add(val) {
        const newNode = new BTNode(val);
        if (!this.root) {
            this.root = newNode;
            return;
        }
        this._addNode(this.root, newNode);
    }
    _addNode(node, newNode) {
        if (newNode.val <= node.val) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._addNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._addNode(node.right, newNode);
            }
        }
    }

    //Contains
    contains(val) {
        return this._containsNode(this.root, val);
    }
    _containsNode(node, val) {
        if (!node) {
            return false;
        }
        if (val === node.val) {
            return true;
        } else if (val < node.val) {
            return this._containsNode(node.left, val);
        } else {
            return this._containsNode(node.right, val);
        }
    }

    //Min
    min() {
        if (!this.root) {
            return null;
        }
        let c = this.root;
        while (c.left) {
            c = c.left;
        }
        return c.val;
    }

    //Max
    max() {
        if (!this.root) {
            return null;
        }
        let c = this.root;
        while (c.right) {
            c = c.right;
        }
        return c.val;
    }

    //Size
    size() {
        return this._sizeNode(this.root);
    }

    _sizeNode(node) {
        if (!node) {
            return 0;
        }
        return 1 + this._sizeNode(node.left) + this._sizeNode(node.right);
    }

    //Is Empty
    isEmpty() {
        return this.root === null;
    }
}
