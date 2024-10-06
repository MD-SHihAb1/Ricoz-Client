import { useEffect, useState } from "react";
import UpdateProductCard from "./ProductUpdateCard"; // Updated import statement

const UpdateProduct = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);




  




  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-28">
        {products.map((product) => (
          <UpdateProductCard key={product._id} product={product} /> // Changed component name here
        ))}
      </div>
    </div>
  );
};

export default UpdateProduct;
