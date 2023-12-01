import './App.css';
import Body from './components/Body';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import List from './components/List';
import React, { useState } from 'react';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Носочки', selected: false },
    { id: 2, name: 'Штани', selected: false },
    { id: 3, name: 'Кофта', selected: false },
  ]);

  const CheckboxChange = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, selected: !product.selected } : product
      )
    );
  };
  return (
    <div className="App">
      <Navbar />
      <Body />
      <div>
        <h1>Список товарів</h1>
        <List products={products} CheckboxChange={CheckboxChange} />
        </div>
      <Footer /> 

    </div>
    
  );
}

export default App;
