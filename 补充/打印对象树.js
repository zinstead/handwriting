function printPath(obj) {
  const res = [];
  function fn(obj, paths) {
    if (typeof obj !== "object") {
      paths.push(obj);
      res.push(paths.join("."));
      paths.pop();
      return;
    }
    if (Array.isArray(obj)) {
      paths.push("list");
      obj.forEach((item) => {
        fn(item, paths);
      });
      paths.pop();
    } else {
      Object.keys(obj).forEach((key) => {
        paths.push(key);
        fn(obj[key], paths);
        paths.pop();
      });
    }
    return res;
  }

  fn(obj, []);
  return res;
}

const obj = {
  a: { b: "c" },
  arr: [
    {
      d: "e",
    },
    {
      i: "j",
    },
  ],
  o: "p",
};

console.log(printPath(obj));
