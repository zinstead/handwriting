function loadImgAsync(src) {
  return new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = () => {
      resolve(img);
    };
    img.onerror = () => {
      reject("图片加载失败");
    };
    img.src = src;
  });
}

loadImgAsync("")
  .then((img) => {
    document.body.appendChild(img);
  })
  .catch((err) => {
    console.log(err);
  });
