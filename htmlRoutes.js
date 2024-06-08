const express = require('express');
const { Post, Comment } = require('../models');
const router = express.Router();

// Define routes for handling post comments, post creation, post update, and post deletion
router.post('/post/:id/comment', async (req, res) => {
  try {
    const newComment = {
      content: req.body.content,
      creator: req.session.username,
      post_id: req.params.id,
    };
    await Comment.create(newComment);
    res.redirect(`/post/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/post', async (req, res) => {
  try {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      creator: req.session.username,
    };
    await Post.create(newPost);
    res.redirect(`/dashboard`);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.put('/post/:id', async (req, res) => {
  try {
    await Post.update(
      {
        title: req.body.title,
        content: req.body.content,
      },
      {
        where: {
          id: req.params.id,
          creator: req.session.username,
        },
      }
    );
    res.redirect(`/post/${req.params.id}`);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/post/:id', async (req, res) => {
  try {
    await Post.destroy({
      where: {
        id: req.params.id,
        creator: req.session.username,
      },
    });
    res.redirect('/dashboard');
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

// Define routes for handling user authentication, like, and dislike
router.post('/login', async (req, res) => {
  // Login route logic
});

router.post('/logout', (req, res) => {
  // Logout route logic
});

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
