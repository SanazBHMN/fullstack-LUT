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
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    return res.status(200).json(posts.slice(0, limit));
  }
  res.status(200).json(posts);
});

// Get a single post
app.get("/api/posts/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ msg: `A post with the ID of ${postId} does not exist` });
  }
  res.status(200).json(post);
});

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING ON PORT ${PORT}`);
});
