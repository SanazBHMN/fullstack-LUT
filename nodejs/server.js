import http from "http";

const PORT = process.env.PORT;

const server = http.createServer((req, res) => {
  // res.setHeader("Content-Type", "text/html");
  // res.statusCode = 404;

  res.writeHead(500, {
    "Content-Type": "application/json",
  });
  res.end(JSON.stringify({ message: "SERVER ERROR" }));
});

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
