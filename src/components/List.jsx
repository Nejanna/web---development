const List = ({ products, CheckboxChange }) => {
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <label>
            <input
              type="checkbox"
              checked={product.selected}
              onChange={() => CheckboxChange(product.id)}
            />
            {product.name}
          </label>
        </li>
      ))}
    </ul>
  );
};
export default List;