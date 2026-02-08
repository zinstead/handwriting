/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  const n = getLength(head);
  const dummyHead = new ListNode(-1, head);
  for (let len = 1; len < n; len *= 2) {
    let pre = dummyHead,
      cur = dummyHead.next;
    while (cur) {
      const head2 = split(cur, len);
      const nextHead = split(head2, len);
      const { head, tail } = merge(cur, head2);
      pre.next = head;
      pre = tail;
      cur = nextHead;
    }
  }
  return dummyHead.next;
};

function merge(l1, l2) {
  const dummyHead = new ListNode();
  let tail = dummyHead;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }
  tail.next = l1 ? l1 : l2;
  while (tail.next) {
    tail = tail.next;
  }
  return { head: dummyHead.next, tail };
}

function split(head, len) {
  while (head && len > 1) {
    head = head.next;
    len--;
  }
  if (!head) return null;
  const head2 = head.next;
  head.next = null;
  return head2;
}

function getLength(head) {
  let len = 0;
  while (head) {
    len++;
    head = head.next;
  }
  return len;
}
