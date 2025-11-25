function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  // 完全可见
  const flag1 =
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= window.innerHeight &&
    rect.right <= window.innerWidth;
  // 部分可见
  const flag2 =
    rect.bottom >= 0 &&
    rect.right >= 0 &&
    rect.top <= window.innerHeight &&
    rect.left <= window.innerWidth;
  // innerHeight是包含滚动条的视口高度
  if (flag1) {
    return true;
  } else {
    return false;
  }
}
// 监听滚动事件的优化：节流和rAF
