import React, { useState } from 'react';
import CommentForm  from './CommentForm';
import "../css/prodstyle.css";

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
      <ul className='select-prod'>
        {products
          .filter((product) => product.selected)
          .map((product) => (
            <li key={product.id}>
              <h3 className='prod-name'>{product.name}</h3>
              <p className='prod-description'>{product.description}</p>
            </li>
          ))}
      </ul>
    </div>
      <div className='comment'>
        <h2>Коментарі:</h2>
        {comments.length === 0 ? (
          <p>Поки що немає коментарів.</p>
        ) : (
          <ul className='comment-add'>
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