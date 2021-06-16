const http = require("http");

const server = http.createServer();

server.on("request", (req, res) => {
  res.end("Welcome");
  console.log("Web requested");
});

server.listen(5000, () => {
  console.log("Connected on port 5000...");
});
