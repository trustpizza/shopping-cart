import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/shop">Store</Link>
        </li>
      </ul>
      <div data-testid="cart">
        {cartCount}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  cartCount: PropTypes.number, // Ensures cartCount is a number
};

export default Navbar;
