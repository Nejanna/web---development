import React, { createContext, useContext, useState } from 'react';

const ProductsContext = createContext();

export const useProducts = () => {
  return useContext(ProductsContext);
};

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: 'Носочки', selected: false, description: 'Теплі' },
    { id: 2, name: 'Штани', selected: false, description: 'Чорні, кльош' },
    { id: 3, name: 'Кофта', selected: false, description: 'На флісі, зимова' },
  ]);

  const toggleProductSelection = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id ? { ...product, selected: !product.selected } : product
      )
    );
  };

  return (
    <ProductsContext.Provider value={{ products, toggleProductSelection }}>
      {children}
    </ProductsContext.Provider>
  );
};
