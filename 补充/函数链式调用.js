function fn(str) {
  let res = str;
  return {
    upperOrLower(method) {
      res = method === "upper" ? res.toUpperCase() : res.toLowerCase();
      return {
        splitString() {
          return res.split(" ");
        },
      };
    },
  };
}

const str = "hello shopee team";
console.log(fn(str).upperOrLower("upper").splitString());
