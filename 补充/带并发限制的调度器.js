class Scheduler {
  constructor() {
    this.maxConcurrency = maxConcurrency;
    this.running = 0;
    this.queue = [];
  }

  addTask(task) {
    return new Promise((resolve, reject) => {
      this.queue.push({ task, resolve, reject });
      this.run();
    });
  }

  run() {
    while (this.running < this.maxConcurrency && this.queue.length > 0) {
      const { task, resolve, reject } = this.queue.shift();
      this.running++;
      task()
        .then(resolve, reject)
        .finally(() => {
          this.running--;
          this.run();
        });
    }
  }
}
