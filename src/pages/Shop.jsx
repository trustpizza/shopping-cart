import { useState, useEffect } from "react";
import ProductCard from "../components/ProductCard"; // Ensure the path is correct
import useProducts from "../services/useProducts"; // Assuming service file path

const Shop = () => {
  const { products, error, loading } = useProducts();

  return (
    <div className="bg-base-200 p-6">
      <h1 className="text-3xl font-bold text-center text-primary mb-6">Bananas for Sale</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 min-h-[200px] flex items-center justify-center">
        {loading && <div className="text-xl text-center col-span-full">Loading products...</div>}
        {error && <div className="text-xl text-center text-red-500 col-span-full">{error}</div>}
        {!loading && !error && products.map((product) => (
          <ProductCard 
            key={product.id} 
            title={product.title} 
            price={product.price} 
            image={product.image} 
            onClick={() => {}} 
          />
        ))}
      </div>
    </div>
  );
};


export default Shop;
