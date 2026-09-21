const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("HOME PAGE");
});

app.get("/about", (req, res) => {
  res.send("ABOUT PAGE");
});

app.listen(8000, () => {
  console.log("THE SERVER IS RUNNING ON PORT 8000");
});
