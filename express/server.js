import express from "express";
import path from "path";
import posts from "./routes/posts.js";

const PORT = process.env.PORT || 8000;

const app = express();

// setup static folder
// app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

app.listen(PORT, () => {
  console.log(`THE SERVER IS RUNNING ON PORT ${PORT}`);
});
