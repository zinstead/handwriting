class _Promise {
  constructor(executor) {
    this.state = "pending";
    this.result = undefined;
    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state !== "pending") {
        return;
      }
      if (typeof value === _Promise) {
        value.then(resolve, reject);
      } else {
        this.state = "fulfilled";
        this.result = value;
      }
      queueMicrotask(() => {
        this.onFulfilledCallbacks.forEach((cb) => cb(this.result));
      });
    };

    const reject = (reason) => {
      if (this.state !== "pending") {
        return;
      }
      this.state = "fulfilled";
      this.result = reason;
      queueMicrotask(() => {
        this.onRejectedCallbacks.forEach((cb) => cb(this.result));
      });
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    return new _Promise((resolve, reject) => {
      onFulfilled =
        typeof onFulfilled === "function" ? onFulfilled : (value) => value;
      onRejected =
        typeof onRejected === "function"
          ? onRejected
          : (reason) => {
              throw reason;
            };

      const callback = (handleFn) => {
        try {
          const result = handleFn();
          if (typeof value === _Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (error) {
          reject(error);
        }
      };

      if (this.state === "fulfilled") {
        queueMicrotask(() => {
          callback(onFulfilled);
        });
      } else if (this.state === "rejected") {
        queueMicrotask(() => {
          callback(onRejected);
        });
      } else {
        this.onFulfilledCallbacks.push(onFulfilled);
        this.onRejectedCallbacks.push(onRejected);
      }
    });
  }

  catch(onRejected) {
    return this.then(undefined, onRejected);
  }

  finally(onFinally) {
    return this.then(
      (value) => Promise.resolve(onFinally()).then(() => value),
      (reason) => Promise.resolve(onFinally()).then(() => reason)
    );
  }
}
