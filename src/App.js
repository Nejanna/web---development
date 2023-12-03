import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './prod_page/ProductsPage';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import React, { useState } from 'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route path="/products" element={<ProductsPage />} />
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
      <Footer />
    </>
  );
}





export default App;
