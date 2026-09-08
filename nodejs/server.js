import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  try {
    // Check if GET request
    if (req.method === "GET") {
      if (req.url === "/") {
        res.writeHead(200, {
          "Content-Type": "text/html",
        });
        res.end("<h1>Homepage</h1>");
      } else if (req.url === "/about") {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end("<h1>About Page</h1>");
      } else {
        res.writeHead(404, { "Content-Type": "text/html" });
        res.end("<h1>Page not found</h1>");
      }
    } else {
      throw new Error("METHOD NOT ALLOWED");
    }
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("SERVER ERROR");
  }
});

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
