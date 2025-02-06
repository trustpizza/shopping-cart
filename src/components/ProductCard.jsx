import { useState } from "react";

const ProductCard = ({ title, image, price, onClick }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div>
      <h5>{title}</h5>
      <img src={image} alt={title} />
      <span>Price: {price}</span>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        aria-label="Quantity"
      />
      <button type="submit" onClick={onClick}>Add to Cart</button>
    </div>
  );
};

export default ProductCard;
