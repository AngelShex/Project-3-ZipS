import React, { useState } from 'react';
import './post.css'

const PostComponent = ({ post, loggedIn }) => {
  const [likeCount, setLikeCount] = useState(post.likes);
  const [dislikeCount, setDislikeCount] = useState(post.dislikes);

  const handleLike = async () => {
    try {
      const response = await fetch(`/api/post/${post.id}/like`, {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        setLikeCount(data.likes);
      } else {
        console.error('Failed to like the post');
      }
    } catch (error) {
      console.error('Error liking the post:', error);
    }
  };

  const handleDislike = async () => {
    try {
      const response = await fetch(`/api/post/${post.id}/dislike`, {
        method: 'POST',
      });
      if (response.ok) {
        const data = await response.json();
        setDislikeCount(data.dislikes);
      } else {
        console.error('Failed to dislike the post');
      }
    } catch (error) {
      console.error('Error disliking the post:', error);
    }
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content">
            <p>
              <strong>@{post.creator}</strong> <small>{post.date_created}</small>
              <br />
              <strong>{post.title}</strong>
              <br />
              {post.content}
            </p>
            <div className="buttons">
              <button onClick={handleLike} className="button is-link">
                Like {likeCount}
              </button>
              <button onClick={handleDislike} className="button is-danger">
                Dislike {dislikeCount}
              </button>
            </div>
          </div>
        </div>
      </article>
      {!loggedIn ? (
        <div className="greeting is-flex is-flex-direction-column is-justify-content-space-between is-align-items-center mb-5 is-size-3">
          <h1 className="greeting-txt">
            Existing/new <a href="/login">log in or sign up</a> to post a comment.
          </h1>
        </div>
      ) : (
        <form className="is-flex-direction-column is-centered comment-form" action={`/post/${post.id}`} method="post">
          <textarea name="content" className="textarea is-rounded" placeholder="Add a comment..."></textarea>
          <input className="button" type="submit" value="post comment" />
        </form>
      )}
      <h2 className="is-size-4">comments ({post.comments.length})</h2>
      {post.comments.map((comment) => (
        <div className="box comment-box" key={comment.id}>
          <article className="media">
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>@{comment.creator}</strong> <small>{comment.date_created}</small>
                  <br />
                  {comment.content}
                </p>
              </div>
            </div>
          </article>
        </div>
      ))}
    </div>
  );
};

export default PostComponent;
