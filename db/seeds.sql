USE zip_blog_db;
CREATE TABLE posts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  creator VARCHAR(255) NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  likes INT DEFAULT 0,
  dislikes INT DEFAULT 0,
  date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);