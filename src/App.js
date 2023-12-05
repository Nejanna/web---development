import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './prod_context/ProductsPage';
import { ProductsProvider } from './prod_context/ProductsContext'; 
import ProfilePage from './profile_context/ProfilePage';
import { UserProvider } from './profile_context/ProfileContext'; 
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import FuncComponent from './components/compon_lab4/FuncComponent';
import ClassComponent from './components/compon_lab4/ClassComponent';
import React, { useState } from 'react';

//лабораторна 5 створено кілька посилань за допомогою react-router
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/products" element={<ProductsProvider><ProductsPage /></ProductsProvider>} />
          <Route path="/user" element={<UserProvider><ProfilePage /></UserProvider>} />
        </Routes>
      </Router>
    </div>
  );
}

function MainLayout() {
  return (
    <>
      <Navbar />
      <Body />
      <FuncComponent />
      <ClassComponent />
      <Footer />
    </>
  );
}





export default App;
