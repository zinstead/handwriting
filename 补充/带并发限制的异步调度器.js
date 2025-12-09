// 带并发限制的异步调度器
class Scheduler {
  constructor(limit) {
    this.limit = limit;
    this.runningCount = 0;
    this.taskQueue = [];
  }

  add(promiseCreator) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ promiseCreator, resolve, reject });
      this.run();
    });
  }

  run() {
    if (this.runningCount < this.limit && this.taskQueue.length > 0) {
      const { promiseCreator, resolve, reject } = this.taskQueue.shift();
      this.runningCount++;
      promiseCreator()
        .then(resolve, reject)
        .finally(() => {
          this.runningCount--;
          this.run();
        });
    }
  }
}

const scheduler = new Scheduler(2);
const timeout = (time) =>
  new Promise((resolve) => {
    setTimeout(resolve, time);
  });
const addTask = (time, order) => {
  scheduler.add(() => timeout(time)).then(() => console.log(time, order));
};

addTask(1000, "1");
addTask(500, "2");
addTask(300, "3");
addTask(400, "4");
// output: 2 3 1 4
// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4
