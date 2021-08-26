const Post = require("../models/Post.js");
const router = require("express").Router();

// CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Post(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json(error);
  }
});

// UPDATE POST

// DELETE POST

// GET POST

module.exports = router;
