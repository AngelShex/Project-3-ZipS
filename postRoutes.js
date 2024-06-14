const express = require('express');
const router = express.Router();
const Post = require('../data/post'); 

router.post('/post/:id/like', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.likes += 1;
    await post.save();
    res.status(200).json({ message: 'Liked' });
  } catch (error) {
    res.status(500).json({ message: 'Error liking the post' });
  }
});

router.post('/post/:id/dislike', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    post.dislikes += 1;
    await post.save();
    res.status(200).json({ message: 'Disliked' });
  } catch (error) {
    res.status(500).json({ message: 'Error disliking the post' });
  }
});

module.exports = router;
