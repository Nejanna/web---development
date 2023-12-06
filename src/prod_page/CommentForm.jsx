import React, { useState } from 'react';
import { useMyStatus} from '../hooks/useMyStatus';
import {useMyConsoleLogger} from '../hooks/useMyConsoleLogger';
import "../css/prodstyle.css";
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
        <h3>Додати коментар:</h3>
        <input
        className='form-coment-add'
          type="text"
          value={newComment}
          onChange={handleInputChange}
        />
      </label>
      <button className='btn-add' type="submit">Відправити</button>
      <p>Статус: {status}</p>
    </form>
  );
};

export default CommentForm;



