import React, { useState } from 'react';
import { useMyStatus} from '../hooks/useMyStatus';
import {useMyConsoleLogger} from '../hooks/useMyConsoleLogger';

const CommentForm = ({ onAddComment }) => {
  const [newComment, setNewComment] = useState('');
  const [status, setStatus] = useMyStatus('Активний');
  useMyConsoleLogger(newComment);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      onAddComment(newComment);
      setNewComment('');
      setStatus('Коментар додано'); 
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
      <button type="submit">Відправити</button>
      <p>Статус: {status}</p>
    </form>
  );
};

export default CommentForm;



