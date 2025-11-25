function jsonp() {
  window.fn = function (data) {
    console.log(data);
  };
  const script = document.createElement("script");
  script.src = "https://example.com/api?callback=fn";
  document.body.appendChild(script);
}
