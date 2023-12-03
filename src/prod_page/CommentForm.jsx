import React, { useState } from 'react';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Додати коментар:
        <input
          type="text"
          value={newComment}
          onChange={handleInputChange}
        />
      </label>
      <button type="submit">Додати</button>
    </form>
  );
};
export default CommentForm;