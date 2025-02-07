  import { useState, useEffect } from "react";

  const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [ctr, setCtr] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        try {
          setProducts([
            { id: 1, title: "Banana", price: 1.99, image: "https://via.placeholder.com/150" },
            { id: 2, title: "Apple", price: 0.99, image: "https://via.placeholder.com/150" }
          ]);
          setLoading(false);
        } catch (err) {
          setError("Failed to load products");
          setLoading(false);
        }
        setCtr(1);
      }, 1000);
    }, []);
  
    return { products, error, loading, ctr };
  };

  export default useProducts;