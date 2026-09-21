const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all posts
app.get("/api/posts", (req, res) => {
  res.json(posts);
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);

  res.json(posts.filter((post) => post.id === postId));
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING ON PORT ${PORT}`);
});
