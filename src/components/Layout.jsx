import { useState } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import useProducts from "../services/useProducts";

const Layout = () => {
  const { products, error, loading } = useProducts();
  const [cart, setCart] = useState([]);

  return (
    <>
    <div>
      <Navbar cartCount={cart.length} />
      <main>
        <Outlet />
      </main>
    </div>
    </>
  )
}

export default Layout;