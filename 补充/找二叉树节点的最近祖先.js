/*
    给定一个二叉树的两个叶子节点p、q，每个节点具有父指针parent，找它们的最近公共祖先，
    要求空间复杂度为O(1)；
*/
function findAncestor(p, q) {
  let node1 = p,
    node2 = q;
  while (node1 !== node2) {
    node1 = node1.parent ? node1.parent : q;
    node2 = node2.parent ? node2.parent : p;
  }
  return node1;
}
