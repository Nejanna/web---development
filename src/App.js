import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductsPage from './prod_context/ProductsPage';
import { ProductsProvider } from './prod_context/ProductsContext'; 
import ProfilePage from './profile_context/ProfilePage';
import { UserProvider } from './profile_context/ProfileContext'; 
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import WindowDialog from './components/WindowDialog';
import React, { useState } from 'react';

//лабораторна 5 створено кілька посилань за допомогою react-router
function App() {
  const [dialogVisible, setDialogVisible] = useState(false);

  const handleOpenDialog = () => {
    setDialogVisible(true);
  };

  const handleCloseDialog = () => {
    setDialogVisible(false);
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />} />
          <Route
            path="/products"
            element={
              <ProductsProvider>
                <Navbar />
                <ProductsPage />
              <>
                <button onClick={handleOpenDialog}>Open Dialog</button>
                <WindowDialog open={dialogVisible} onClose={handleCloseDialog} />
              </>
              </ProductsProvider>
            }
          />
          <Route path="/user" element={<UserProvider><Navbar /><ProfilePage /></UserProvider>} />
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
