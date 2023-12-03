import List from '../components/List';
import Products from './Products';
import React, { useState } from 'react';

function ProductsPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Носочки', selected: false,description: "Теплі" },
    { id: 2, name: 'Штани', selected: false, description: "Чорні, кльош" },
    { id: 3, name: 'Кофта', selected: false, description: "На флісі, зимова" },
  ]);

  const CheckboxChange = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, selected: !product.selected } : product
      )
    );
  };
  return (
    <div className="ProductPage">
      <div>
        <h1>Список товарів</h1>
        <List products={products} CheckboxChange={CheckboxChange} />
      </div>
      <Products products={products}/> 

    </div>
    
  );
}

export default ProductsPage;