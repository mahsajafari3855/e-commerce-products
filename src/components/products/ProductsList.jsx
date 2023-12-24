import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { RiseLoader } from "react-spinners";
import ProductItem from "./ProductItem";
import "../style/productsList.css"

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res);
      setLoading(false);
    });
  }, []);
 

  

  if (loading) {
    return (
      <div className="loading">
        <RiseLoader color="#e542eb" />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="row mb-3"></div>
      <div className="row">
        {products.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
