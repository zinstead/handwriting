// key相同的值放在一个数组
// 需要对值进行解码
function parseUrlParams(url) {
  const paramsStr = url.split("?")[1];
  const params = paramsStr.split("&");
  const res = {};
  for (const item of params) {
    const [key, value] = item.split("=");
    const parsedValue = decodeURIComponent(value);
    if (res[key] === undefined) {
      res[key] = parsedValue;
    } else {
      res[key] = [res[key], parsedValue];
    }
  }
  return res;
}
