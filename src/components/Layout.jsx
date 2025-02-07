import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useProducts from "../services/useProducts";

const Layout = () => {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  const addToCart = (product, quantity) => {
    setCart((prevCart) => {
      // Check if product is already in cart
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        // Update quantity if product exists
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      } else {
        // Add new product to cart
        return [...prevCart, { ...product, quantity }];
      }
    });
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  const totalPriceInCart = cart.reduce((total, item) => total + item.quantity * item.price, 0);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-base-200">
        <Navbar cartCount={totalItemsInCart} totalPrice={totalPriceInCart.toFixed(2)} />
        <main className="flex-grow container mx-auto p-4">
          {/* Display the total price of items in the cart */}
          <Outlet context={{ cart, addToCart, products, error, loading }} />
        </main>
      </div>
    </>
  );
};

export default Layout;
