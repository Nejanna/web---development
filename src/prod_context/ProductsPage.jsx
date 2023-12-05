import React from 'react';
import { useProducts } from './ProductsContext';
import List from '../components/List';
import Products from '../prod_page/Products';

function ProductsPage() {
  const { products, toggleProductSelection } = useProducts();

  return (
    <div className="ProductPage">
      <div>
        <h1>Список товарів</h1>
        <List products={products} CheckboxChange={toggleProductSelection} />
      </div>
      <Products products={products} />
    </div>
  );
}

export default ProductsPage;
