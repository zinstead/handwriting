function findTopKth(matrix, k) {
  const m = matrix.length;
  if (m === 0) {
    return [];
  }
  const n = matrix[0].length;
  const maxHeap = new MaxHeap();
  for (let i = 0; i < m; i++) {
    maxHeap.push({ val: matrix[i][n - 1], row: i, col: n - 1 });
  }

  const result = [];
  while (k-- > 0 && maxHeap.size() > 0) {
    const { val, row, col } = maxHeap.pop();
    result.push(val);
    if (col > 0) {
      maxHeap.push({ val: matrix[row][col - 1], row, col: col - 1 });
    }
  }
  return result;
}

class MaxHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    this.up(this.heap.length - 1);
  }

  pop() {
    const val = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.down(0);
    return val;
  }

  up(i) {
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (this.heap[i].val <= this.heap[p].val) {
        break;
      }
      const temp = this.heap[i];
      this.heap[i] = this.heap[p];
      this.heap[p] = temp;
      i = p;
    }
  }

  down(i) {
    const n = this.heap.length;
    let largest = i;
    let l = 2 * i + 1,
      r = 2 * i + 2;
    while (true) {
      if (l < n && this.heap[l].val > this.heap[largest].val) {
        largest = l;
      }
      if (r < n && this.heap[r].val > this.heap[largest].val) {
        largest = r;
      }
      if (largest === i) {
        break;
      }
      const temp = this.heap[i];
      this.heap[i] = this.heap[largest];
      this.heap[largest] = temp;
      i = largest;
    }
  }

  size() {
    return this.heap.length;
  }
}

// 测试用例
const matrix = [
  [1, 3, 5],
  [2, 4, 9],
  [6, 8, 10],
];
console.log(findTopKth(matrix, 5));
// 输出: [10, 9, 8, 6, 5]
