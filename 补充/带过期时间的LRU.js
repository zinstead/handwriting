class Node {
  constructor(key, value, ttl) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;

    this.ttl = ttl;
    // 1. 虚拟节点的过期时间
    this.expires = ttl ? Date.now() + ttl : Infinity;
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
    // 2. get方法的三个步骤
    if (!node) return undefined;
    if (node.expires < Date.now()) {
      this._removeNode(node);
      this.map.delete(key);
      return undefined;
    }
    node.expires = Date.now() + node.ttl;
    this._moveToHead(node);
    return node.value;
  }

  put(key, value, ttl) {
    const node = this.map.get(key);
    if (node) {
      // 3. 更新节点时要更新value，ttl和expires
      node.value = value;
      node.ttl = ttl;
      node.expires = Date.now() + ttl;
      this._moveToHead(node);
    } else {
      if (this.size() >= this.maxCapacity) {
        const node = this._removeTail();
        this.map.delete(node.key);
      }
      const node = new Node(key, value, ttl);
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

  size() {
    const now = Date.now();
    const expiredKeys = [];
    // 4. 不建议一边迭代一边删除
    for (let node of this.map.values()) {
      if (node.expires < now) {
        expiredKeys.push(node.key);
      }
    }
    for (let key of expiredKeys) {
      const node = this.map.get(key);
      this._removeNode(node);
      this.map.delete(key);
    }
    return this.map.size;
  }
}
