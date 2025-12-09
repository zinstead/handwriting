var restoreIpAddresses = function (s) {
  const res = [];

  function backtrack(i, ip) {
    if (i === s.length && ip.length === 4) {
      res.push(ip.join("."));
      return;
    }
    if (i === s.length || ip.length === 4) {
      return;
    }
    if (s[i] === "0") {
      ip.push(0);
      backtrack(i + 1, ip);
      ip.pop();
    } else {
      let num = 0;
      for (let j = i; j < s.length; j++) {
        num = num * 10 + (s[j] - "0");
        if (num > 255) break;
        ip.push(num);
        backtrack(j + 1, ip);
        ip.pop();
      }
    }
  }

  backtrack(0, []);
  return res;
};
