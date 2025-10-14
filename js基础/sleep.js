// 用promise包裹定时器就行，无法实现sleep(3000)暂停3s，还是要结合promise；
function sleep(delay) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
}
