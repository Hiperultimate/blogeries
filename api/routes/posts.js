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
router.put("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Post.findByIdAndUpdate(
          req.params.postId,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (error) {
        res.status(500).json(error);
      }
    } else {
      res.status(401).json("You can only access your posts.");
    }
  } catch (error) {
    res.status(500).json(error);
  }
});


// DELETE POST
router.delete('/:postId', async (req,res) => {
    try {
        const getPost = await Post.findById(req.params.postId);
        if(getPost.username === req.body.username){
            try{
                await Post.findByIdAndDelete(req.params.postId);
                res.status(200).json({msg:"Post deleted successfully", post : getPost});
            }catch(error){
                res.status(500).json(error);
            }
        }else{
            res.status(400).json("You can only delete your posts")
        }
    } catch (error) {
        res.status(404).json("Post not found");
    }
})

// GET POST
router.get('/:postId', async (req,res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json(error);
    }
});

// GET ALL POSTS
router.get('/', async (req,res) => {
  const username = req.query.user;
  const catName = req.query.cat; //category
    try {
        let posts;
        if(username){
          posts = await Post.find({username: username});
        }else if(catName){
          posts = await Post.find({categories : {
            $in:[catName]
          }})
        } else {
          posts = await Post.find();
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = router;
