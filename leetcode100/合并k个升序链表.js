/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  const n = lists.length;
  if (n === 0) return null;
  for (let size = 1; size < n; size *= 2) {
    for (let i = 0; i + size < n; i += size * 2) {
      lists[i] = merge(lists[i], lists[i + size]);
    }
  }
  return lists[0];
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
  return dummyHead.next;
}
