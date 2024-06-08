// CommentComponent.jsx
import React from 'react';

const CommentComponent = ({ content, creator, dateCreated }) => {
  return (
    <div className="comment">
      <p>{content}</p>
      <p>By: {creator}</p>
      <p>Created at: {dateCreated}</p>
    </div>
  );
};

export default CommentComponent;
