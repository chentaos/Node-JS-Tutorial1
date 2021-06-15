const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("This is out short page");
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't find the page you are looking for</p>
      <a href='/'>back home</a>
      `);
  }
});

server.listen(5000);
