import express from "express";

const router = express.Router();

let posts = [
  { id: 1, title: "Post One" },
  { id: 2, title: "Post Two" },
  { id: 3, title: "Post Three" },
];

const logger = (req, res, next) => {
  console.log(
    `${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`,
  );
  next();
};

// Get all posts
router.get("/", logger, (req, res, next) => {
  const limit = req.query.limit;

  if (!isNaN(limit) && limit > 0) {
    return res.status(401).json(posts.slice(0, limit));
  }

  res.status(200).json(posts);
});

// Get a single post
router.get("/:id", (req, res, next) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const error = new Error(`A post with ID of ${postId} does not exist`);
    error.status = 404;
    return next(error);
  }

  res.status(200).json(post);
});

// Create a new post
router.post("/", (req, res, next) => {
  const newPost = {
    id: posts.length + 1,
    title: req.body.title,
  };

  if (!newPost.title) {
    // return res.status(400).json({ message: `Please include a title` });
    const err = new Error(`Please include a title`);
    err.status = 400;
    return next(err);
  }

  posts.push(newPost);
  res.status(201).json(posts);
});

// Update a post
router.put("/:id", (req, res, next) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const error = new Error(`A post with ID of ${postId} does not exist`);
    error.status(404);
    return next(err);
  }

  post.title = req.body.title;
  res.status(200).json(posts);
});

// Delete a post
router.delete("/:id", (req, res, next) => {
  const postId = parseInt(req.params.id);
  const post = posts.find((post) => post.id === postId);

  if (!post) {
    const error = new Error(`Cannot find post with id ${postId}`);
    error.status = 404;
    return next(error);
  }

  const updatedPosts = posts.filter((post) => post.id !== postId);
  res.status(200).json(updatedPosts);
});

export default router;
