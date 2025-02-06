import { useState } from "react";
import PropTypes from "prop-types";

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
        onChange={(e) => setQuantity(Number(e.target.value))}
        aria-label="Quantity"
      />
      <button type="submit" onClick={onClick}>Add to Cart</button>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,  // Ensures title is a required string
  image: PropTypes.string.isRequired,  // Ensures image is a required string (URL)
  price: PropTypes.number.isRequired,  // Ensures price is a required number
  onClick: PropTypes.func.isRequired,  // Ensures onClick is a required function
};

export default ProductCard;
