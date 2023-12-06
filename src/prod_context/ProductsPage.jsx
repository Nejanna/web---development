import React from 'react';
import { useProducts } from './ProductsContext';
import List from '../components/List';
import Products from '../prod_page/Products';
import "../css/prodstyle.css";


function ProductsPage() {
  const { products, toggleProductSelection } = useProducts();

  return (
    <div className="ProductPage">
      <div className='List'>
        <h1>Список товарів</h1>
        <List products={products} CheckboxChange={toggleProductSelection} />
      </div>
      <div className='Products'>
      <Products products={products} />
      </div>
    </div>
  );
}

export default ProductsPage;
