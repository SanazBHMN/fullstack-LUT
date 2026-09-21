import express from "express";

const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

// Get all posts
router.get("/", (req, res) => {
  const limit = req.query.limit;

  if (!isNaN(limit) && limit > 0) {
    return res.status(401).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
router.get("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with ID of ${postId} does not exist` });
  }

  res.status(200).json(post);
});

// Create a new post
router.post("/", (req, res) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    return res.status(400).json({ message: `Please include a title` });
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Update a post
router.put("/:id", (req, res) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    return res
      .status(404)
      .json({ message: `A post with ID of ${postId} does not exist` });
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

export default router;
