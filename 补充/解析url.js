function MyURL(url) {
  const initObj = {
    protocol: "http",
    host: "",
    port: 80,
    path: "/",
    params: null,
    hash: null,
  };
  Object.keys(initObj).forEach((key) => {
    this[key] = initObj[key];
  });
  let rest = url;

  let i = rest.indexOf("://");
  this.protocol = rest.slice(0, i);
  rest = rest.slice(i + 3);

  i = rest.indexOf("#");
  if (i !== -1) {
    this.hash = rest.slice(i + 1);
    rest = rest.slice(0, i);
  }

  i = rest.indexOf("?");
  if (i !== -1) {
    const paramStr = rest.slice(i + 1);
    const params = {};
    paramStr.split("&").forEach((str) => {
      const [key, value] = str.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value);
    });
    this.params = params;
    rest = rest.slice(0, i);
  }

  i = rest.indexOf("/");
  if (i !== -1) {
    this.path = rest.slice(i);
    rest = rest.slice(0, i);
  }

  i = rest.indexOf(":");
  if (i !== -1) {
    this.port = Number.parseInt(rest.slice(i + 1));
    this.host = rest.slice(0, i);
  } else {
    this.host = rest;
  }
}

const url = "https://example.com:8080/home/123?name=alan&age=18#hash";
const res = new MyURL(url);
console.log(res);
