import React, { useState } from 'react';
import CommentForm  from './CommentForm';
const Products = ({ products}) => {
  const [comments, setComments] = useState([]);

  const addComment = (newComment) => {
    const updatedComments = [...comments, newComment];
    setComments(updatedComments);
  };

  return (
    <div>
       <div className="products">
      <h2>Вибрані товари:</h2>
      <ul>
        {products
          .filter((product) => product.selected)
          .map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
            </li>
          ))}
      </ul>
    </div>
      <div>
        <h2>Коментарі:</h2>
        {comments.length === 0 ? (
          <p>Поки що немає коментарів.</p>
        ) : (
          <ul>
            {comments.map((comment, index) => (
              <li key={index}>{comment}</li>
            ))}
          </ul>
        )}
      </div>

      <CommentForm onAddComment={addComment} />
    </div>
  );
};

export default Products;