/**
 * @param {number} capacity
 */
class ListNode {
  constructor(key, val, next, prev) {
    this.key = key;
    this.val = val;
    this.next = next;
    this.prev = prev;
  }
}

var LRUCache = function (capacity) {
  this.capacity = capacity;
  this.map = new Map();
  this.head = new ListNode();
  this.tail = new ListNode();
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    this.moveToHead(node);
    return node.val;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.map.has(key)) {
    const node = this.map.get(key);
    node.val = value;
    this.moveToHead(node);
  } else {
    if (this.map.size >= this.capacity) {
      const node = this.removeTail();
      this.map.delete(node.key);
    }
    const node = new ListNode(key, value);
    this.addToHead(node);
    this.map.set(key, node);
  }
};

LRUCache.prototype.moveToHead = function (node) {
  this.remove(node);
  this.addToHead(node);
};

LRUCache.prototype.remove = function (node) {
  node.prev.next = node.next;
  node.next.prev = node.prev;
};

LRUCache.prototype.removeTail = function () {
  const node = this.tail.prev;
  this.remove(node);
  return node;
};

LRUCache.prototype.addToHead = function (node) {
  node.next = this.head.next;
  this.head.next = node;
  node.prev = this.head;
  node.next.prev = node;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
