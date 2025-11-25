class Node {
  constructor(key, value, ttl = null) {
    this.key = key;
    this.value = value;
    this.ttl = ttl;
    this.expires = ttl ? Date.now() + ttl : null;
    this.prev = null;
    this.next = null;
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
    if (!node) return undefined;
    if (node.expires < Date.now()) {
      this.map.delete(key);
      this.removeNode(node);
      return undefined;
    }
    this._moveToHead({ ...node, expires: Date.now() + node.ttl });
    return node.value;
  }

  set(key, value, ttl) {
    const node = this.map.get(key);
    if (node) {
      node.value = value;
      node.ttl = ttl;
      this._moveToHead(node);
    } else {
      if (this.size() >= this.maxCapacity) {
        const tail = this._removeTail();
        this.map.delete(tail.key);
      }
      const head = new Node(key, value, ttl);
      this._addToHead(head);
      this.map.set(key, head);
    }
  }

  _removeNode(node) {
    const prev = node.prev;
    prev.next = node.next;
    node.next.prev = prev;
  }

  _moveToHead(node) {
    this._removeNode(node);
    this._addToHead(node);
  }

  _addToHead(node) {
    const first = this.head.next;
    this.head.next = node;
    first.prev = node;
    node.next = first;
    node.prev = this.head;
  }

  _removeTail() {
    const last = this.tail.prev;
    last.prev.next = this.tail;
    this.tail.prev = last.prev;
    return last;
  }

  _size() {
    for (const [key, node] of this.map) {
      if (node.expires < Date.now()) {
        this._removeNode(node);
        this.map.delete(key);
      }
    }
    return this.map.size;
  }
}
