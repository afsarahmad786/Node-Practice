const http = require("http");
const server = http.createServer((req, res) => {
  console.log("afsar");
});
server.listen(4000);
