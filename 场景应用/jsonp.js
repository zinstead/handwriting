window.handleResponse = function (data) {
  console.log(data);
};
const script = document.createElement("script");
script.src = `http://localhost:3000/api/data?callback=handleResponse`;
document.body.appendChild(script);
