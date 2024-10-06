import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-28">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
    {products.map((product) => (
      <ProductCard key={product._id} product={product} />
    ))}
  </div>
</div>

  );
};

export default Product;
