function _setInterval(callback, delay) {
  const id = Symbol("interval id");

  function tick() {
    if (!_setInterval.timers.has(id)) return;
    callback();
    const timerId = setTimeout(tick, delay);
    _setInterval.timers.set(id, timerId);
  }

  const timerId = setTimeout(tick, delay);
  _setInterval.timers.set(id, timerId);
  return id;
}
_setInterval.timers = new Map();

function _clearInterval(id) {
  const timerId = _setInterval.timers.get(id);
  if (timerId) {
    clearTimeout(timerId);
    _setInterval.timers.delete(id);
  }
}
