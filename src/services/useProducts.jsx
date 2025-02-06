  import { useState, useEffect } from "react";

  const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
  
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
      }, 1000);
    }, []);
  
    return { products, error, loading };
  };

  export default useProducts;