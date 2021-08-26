const router = require("express").Router();
const User = require("../models/User.js");
const Post = require('../models/Post.js');
const bcrypt = require("bcrypt");

// UPDATE USER
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    if (req.body.password) {
      // Checking if the user is changing his password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(req.body.password, salt);
      req.body.password = hashedPassword;
    }
    try {
      /*If the field does not exist, $set will add a new field with 
      the specified value, provided that the new field does not violate 
      a type constraint. If you specify a dotted path for a non-existent
       field, $set will create the embedded documents as needed to fulfill 
       the dotted path to the field.*/
      const Updateduser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true } //Will return the updated user.
      );
      res.status(200).json(Updateduser);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(401).json("You can update only your account");
  }
});

// DETELE USER
router.delete('/:id', async (req, res) => {
  if(req.body.userId === req.params.id){
    try {
      const user = await User.findById(req.params.id);
      if(!user){
        return res.status(404).json("User not found");
      }
      try {
        await Post.deleteMany({username: user.username});
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({'success': true, User: user});
      } catch (error) {
        res.status(500).json(error);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }else{
    res.status(401).json("You can only delete your account");
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const {password, ...others} = user._doc;
    res.status(200).json(others);
  } catch (error) {
    res.status(500).json(error);
  }
})

module.exports = router;
