const http = require("http");

const routes = require("./route");

const server = http.createServer(routes.handler);

server.listen(8000);