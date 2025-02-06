import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
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
      </div>
    </nav>
    </>
  );
};

export default Navbar;
