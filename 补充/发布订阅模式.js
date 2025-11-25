class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, cb) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(cb);
  }

  off(event, cb) {
    if (!this.events[event]) return;
    this.events[event] = this.events[event].filter((fn) => fn !== cb);
  }

  emit(event, ...args) {
    if (!this.events[event]) return;
    this.events[event].forEach((cb) => cb(...args));
  }

  once(event, cb) {
    const wrapper = (...args) => {
      cb(...args);
      this.off(event, wrapper);
    };
    this.on(event, wrapper);
  }
}
