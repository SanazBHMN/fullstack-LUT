import express from "express";

const app = express();

const PORT = 8000;

// CONFIG EJS
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res, next) => {
  res.render("index", {
    title: "Welcome",
    message: "Hello from EJS",
    people: ["Sanaz", "Solmaz", "Shaylin"],
  });
});

app.listen(PORT, () => console.log(`SERVER IS RUNNING AT PORT ${PORT}`));
