// Linux操作系统要给进程分配pid，设计一个算法保证从1分配到最大值，分配完了再从1分配。

class PIDAllocator {
  constructor(maxPid) {
    this.maxPid = maxPid;
    this.lastPid = 0;
    this.bitMap = new Array(maxPid + 1).fill(false);
  }

  allocate() {
    let pid = this.lastPid + 1;
    if (pid > this.maxPid) {
      pid = 1;
    }
    for (let i = 0; i < this.maxPid; i++) {
      const candidate = ((pid + i - 1) % this.maxPid) + 1;
      if (!this.bitMap[candidate]) {
        this.bitMap[candidate] = true;
        this.lastPid = candidate;
        return candidate;
      }
    }
    throw new Error("没有可分配的pid");
  }

  release(pid) {
    if (pid >= 1 && pid <= this.maxPid) {
      this.bitMap[candidate] = false;
    }
  }
}
