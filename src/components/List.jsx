import "../css/liststyle.css";
const List = ({ products, CheckboxChange }) => {
  return (
    <ul className="list-container">
      {products.map((product) => (
        <li key={product.id} className="prod">
          <label className="label-check">
            <input
              className="input-prod"
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