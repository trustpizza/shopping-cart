import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useProducts from "../services/useProducts";

const Layout = () => {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className="min-h-screen flex flex-col bg-base-200">
        <Navbar cartCount={cart.length} />
        <main className="flex-grow container mx-auto p-4">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Layout;
