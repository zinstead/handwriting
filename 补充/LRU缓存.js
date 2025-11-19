class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (!node) return -1;
    this._moveToHead(node);
    return node.value;
  }

  put(key, value) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this._moveToHead(node);
    } else {
      const node = new Node(key, value);
      this._addToHead(node);
      this.map.set(key, node);
      if (this.map.size > this.capacity) {
        const lastNode = this._removeTail();
        this.map.delete(lastNode.key);
      }
    }
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  _removeNode(node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
  }

  _addToHead(node) {
    const firstNode = this.head.next;
    node.prev = this.head;
    node.next = firstNode;
    this.head.next = node;
    firstNode.prev = node;
  }

  _removeTail() {
    const node = this.tail.prev;
    this._removeNode(node);
    return node;
  }
}
