import React from "react";
import PropTypes from "prop-types";
import "../style/productItem.css"
const ProductItem = ({ product }) => {
  return (
    <div className="card mb-3 custom-product-card">
      <div className="card-body">
        <img
          src={product.image}
          className="card-img-top imageStyle img-fluid"
          alt={product.title}
        />
        <div className="product-details mt-3">
          <h5 className="card-title titleStyle">
            {product.title}
            <span className="tooltip">{product.title}</span>
          </h5>
          <p className="card-text text-center">${product.price}</p>
        </div>
      </div>
    </div>
  );
};

ProductItem.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductItem;
