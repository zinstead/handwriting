class Node {
  constructor(key, value, prev, next) {
    this.key = key;
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}

class LRUCache {
  constructor(maxCapacity) {
    this.maxCapacity = maxCapacity;
    this.map = new Map();
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    const node = this.map.get(key);
    if (node) {
      this._moveToHead(node);
      return node.value;
    } else {
      return undefined;
    }
  }

  put(key, value) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      this._moveToHead(node);
    } else {
      if (this.map.size >= this.maxCapacity) {
        const node = this._removeTail();
        this.map.delete(node.key);
      }
      const node = new Node(key, value);
      this._addToHead(node);
      this.map.set(key, node);
    }
  }

  _addToHead(node) {
    const first = this.head.next;
    node.prev = this.head;
    node.next = first;
    this.head.next = node;
    first.prev = node;
  }

  _removeNode(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  _removeTail() {
    const node = this.tail.prev;
    this._removeNode(node);
    return node;
  }
}
