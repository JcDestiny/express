const express = require("express");
var path = require("path");
const history = require("connect-history-api-fallback");

const app = express();
app.use(history());
app.use(express.static(path.join(__dirname, "dist")));

app.listen(8000, () => {
  console.log("示例应用正在监听 8000 端口 !");
});
