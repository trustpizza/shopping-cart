import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ cartCount = 0, totalPrice = 0 }) => {
  return (
    <nav className="navbar bg-base-100 shadow-md p-4">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          Home
        </Link>
        <Link to="/shop" className="btn btn-ghost text-xl ml-4">
          Store
        </Link>
      </div>
      <div className="flex-none">
        <div className="indicator">
          <span data-testid="cart" className="indicator-item badge badge-secondary">{cartCount}</span>
          <div className="btn btn-square btn-ghost">
            🛒
          </div>
        </div>
        {/* Display the total price */}
        <div className="ml-4 text-lg font-semibold">
          ${totalPrice}
        </div>
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number, // Ensures cartCount is a number
  totalPrice: PropTypes.number, // Ensures totalPrice is a number
};

export default Navbar;
