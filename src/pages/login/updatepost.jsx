import React, { useState } from 'react';
import './post.css'; // Make sure you have appropriate styles

const UpdatePostComponent = ({ post }) => {
  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.content);

  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle the update logic here
    console.log('Update post:', { title, content });
    // Typically, you'd make an API call to update the post
  };

  const handleDelete = (e) => {
    e.preventDefault();
    // Handle the delete logic here
    console.log('Delete post with ID:', post.id);
    // Typically, you'd make an API call to delete the post
  };

  return (
    <div className="box">
      <article className="media">
        <div className="media-content">
          <div className="content is-flex is-flex-direction-column">
            <p>
              <strong>@{post.creator}</strong> <small>{post.date_created}</small>
              <br />
              <form
                className="is-centered new-post-form"
                action={`/post/${post.id}/edit?_method=PUT`}
                method="post"
                onSubmit={handleUpdate}
              >
                <input
                  className="input mb-3"
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
                <textarea
                  className="textarea mb-3"
                  id="content"
                  name="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
                <button
                  className="button post-btn column is-full is-flex is-align-items-center"
                  type="submit"
                >
                  update
                </button>
              </form>
            </p>
            <form
              className="is-centered"
              action={`/post/${post.id}/edit?_method=DELETE`}
              method="post"
              onSubmit={handleDelete}
            >
              <input type="hidden" />
              <button
                className="button is-danger delete-btn column is-full has-text-centered is-flex is-align-items-center"
                type="submit"
              >
                delete
              </button>
            </form>
          </div>
        </div>
      </article>
    </div>
  );
};

export default UpdatePostComponent;
