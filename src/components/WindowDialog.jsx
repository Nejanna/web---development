import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import "../css/dialogstyle.css";

const WindowDialog = ({ open, onClose }) => {
  const [phone, setPhone] = useState('');

  return (
    <CSSTransition
      in={open}
      timeout={300}
      classNames="dialog"
      unmountOnExit
      onEnter={() => document.body.classList.add('dialog-open')}
      onExited={() => document.body.classList.remove('dialog-open')}
    >
      <div className="dialog-wrapper">
        <div className="dialog-content">
          <h2>Залиште номер , щоб були в курсі новин</h2>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ваш номер телефону"
          />
          <button onClick={onClose}>Закрити</button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default WindowDialog;