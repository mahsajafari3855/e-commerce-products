import React, { useState } from "react";

const ProductFilter = ({ onFilterChange }) => {
  const [filterValue, setFilterValue] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;
    setFilterValue(value);
    onFilterChange(value.toLowerCase());
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Filter by name..."
        value={filterValue}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default ProductFilter;
