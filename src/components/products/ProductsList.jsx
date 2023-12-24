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
  const [sortOrder, setSortOrder] = useState("");
  const [isSortingEnabled, setIsSortingEnabled] = useState(true);

  useEffect(() => {
    setLoading(true);
    getAllProducts().then((res) => {
      setProducts(res);
      setFilteredProducts(res); // Initially set filtered products to all products
      setLoading(false);
    });
  }, []);
  const handleSortByPrice = () => {
    let sortedProducts = [...filteredProducts];

    sortedProducts.sort((a, b) => a.price - b.price);

    // Toggle sorting order
    if (sortOrder === "desc") {
      sortedProducts.reverse();
      setSortOrder("asc");
    } else {
      setSortOrder("desc");
    }

    setFilteredProducts(sortedProducts);
    setIsSortingEnabled(false); // Disable sorting after sorting action
  };
  const resetSorting = () => {
    setIsSortingEnabled(true);
    setFilteredProducts(products); // Reset the product list to the original state
    // Reset other sorting-related state if needed
  };
 
 

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
        <div className="col-md-12 d-flex justify-content-center">
          <button
            onClick={handleSortByPrice}
            disabled={!isSortingEnabled}
            className="btn btn-primary px-1 py-2 m-1"
          >
            Sort by Price {sortOrder === "asc" ? "↓" : "↑"}
          </button>
          <button
            onClick={resetSorting}
            className="btn btn-secondary px-1 py-2 m-1"
          >
            Reset Sorting
          </button>
        </div>
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
