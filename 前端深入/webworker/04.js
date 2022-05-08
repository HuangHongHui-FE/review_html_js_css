// worker线程
let arr = [...好多图片路径];
for (let i = 0, len = arr.length; i < len; i++) {
      let req = new XMLHttpRequest();
      req.open('GET', arr[i], true);
      req.responseType = "blob";
      req.setRequestHeader("client_type", "DESKTOP_WEB");
      req.onreadystatechange = () => {
        if (req.readyState == 4) {
        postMessage(req.response);
      }
    }
    req.send(null);
}