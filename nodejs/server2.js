import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "Sanaz Bahmani" },
  { id: 2, name: "Solmaz Bahmani" },
  { id: 3, name: "Shaylin Hosseini" },
];

const server = createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/api/users" && method === "GET") {
    res.setHeader("Content-Type", "application/json");
    res.write(JSON.stringify(users));
    res.end();
  } else if (url.match(/\/api\/users\/([0-9]+)/) && method === "GET") {
    const userId = url.split("/")[3];
    const user = users.find((user) => user.id === parseInt(userId));
    res.setHeader("Content-Type", "application/json");
    if (user) {
      res.write(JSON.stringify(user));
    } else {
      res.statusCode = 404;
      res.write(JSON.stringify({ message: "USER NOT FOUND" }));
    }
    res.end();
  } else {
    res.setHeader("Content-Type", "application/json");
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "ROUTE NOT FOUND" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`SERVER IS RUNNING ON PORT ${PORT}`);
});
