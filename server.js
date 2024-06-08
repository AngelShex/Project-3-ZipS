const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 5000;

// MySQL connection
const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Like route
app.post('/api/post/:id/like', (req, res) => {
  const { id } = req.params;
  pool.query('UPDATE posts SET likes = likes + 1 WHERE id = ?', [id], (error, result) => {
    if (error) {
      res.status(500).json({ message: 'Error liking the post', error });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Liked' });
    }
  });
});

// Dislike route
app.post('/api/post/:id/dislike', (req, res) => {
  const { id } = req.params;
  pool.query('UPDATE posts SET dislikes = dislikes + 1 WHERE id = ?', [id], (error, result) => {
    if (error) {
      res.status(500).json({ message: 'Error disliking the post', error });
    } else if (result.affectedRows === 0) {
      res.status(404).json({ message: 'Post not found' });
    } else {
      res.status(200).json({ message: 'Disliked' });
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
