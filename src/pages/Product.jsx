 import React from "react";
import "./Product.css";

const Product = ({ img, title, oldPrice, newPrice }) => {
  return (
    <div className="product-card">
      <img src={img} alt={title} className="product-img" />

      <div className="product-info">
        <h3>{title}</h3>

        <div className="product-prices">
          <span className="old-price">Rs {oldPrice}</span>
          <span className="new-price">Rs {newPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
