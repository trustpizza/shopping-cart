import { useState, useEffect } from "react";

const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://fakestoreapi.com/products?limit=10')
        .then((response) => {
          if (response.status >= 400) {
            throw new Error("Server error");
          }
          return response.json();
        })
        .then((response) => {
          const transformedProducts = response.map((product) => ({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
          }));
          setProducts(transformedProducts);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

  return { products, error, loading };
};

export default useProducts;
