import React, { useState } from 'react';
import LoginModal from './LoginModal';
import "../css/navstyle.css";

const Navbar = () => {
  const [loginModalVisible, setLoginModalVisible] = useState(false); 
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <div className="logo">
            <strong>SHOP_NEJANNA</strong>
          </div>
          <div className='content-nav'>
            <ul className="nav-list">
              <li className="nav-list_item"><a href="/" className="">Головна</a></li>
              <li className="nav-list_item"><a href="/products" className="">Асортимент</a></li>
              <li className="nav-list_item"><a href="/user" className="">Ваш профіль</a></li>
              <LoginModal visible={loginModalVisible} onCancel={setLoginModalVisible} />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
