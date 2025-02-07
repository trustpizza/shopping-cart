import { useState } from "react";
import PropTypes from "prop-types";

const ProductCard = ({ title, image, price, onClick }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card w-full max-w-xs bg-base-100 shadow-lg p-4">
      <img src={image} alt={title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <span className="text-lg font-bold text-primary mb-2">Price: ${price}</span>
      
      <div className="flex items-center gap-2 mb-4">
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
          aria-label="Quantity"
          className="input input-bordered w-16"
        />
        <span className="text-sm">Qty</span>
      </div>
      
      <button
        type="button"
        onClick={() => onClick(quantity)}
        className="btn btn-primary w-full"
      >
        Add to Cart
      </button>
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
