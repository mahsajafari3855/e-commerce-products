import React, { useEffect, useState } from "react";
import { getAllProducts } from "../../api/products";
import { RiseLoader } from "react-spinners";
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";
import "../style/productsList.css"
const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res);
      setFilteredProducts(res); // Initially set filtered products to all products
      setLoading(false);
    });
  }, []);
 
 

  const handleFilterChange = (filterValue) => {
    // Filter products based on the filterValue (product name)
    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(filterValue)
    );
    setFilteredProducts(filtered); // Update filtered products state
  };

  if (loading) {
    return (
      <div className="loading">
        <RiseLoader color="#e542eb" />
      </div>
    );
  }

  return (
    <div className="container">
      <ProductFilter onFilterChange={handleFilterChange} />
      <div className="row mb-3"> 
      </div>
      <div className="row">
        {filteredProducts.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
