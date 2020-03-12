import React from "react";
import "./product-list.css";

const ProductList = ({ thumbnails }) => (
  <div>
    <h1 className="product-list__title">Masks</h1>
    <div className="product-list__gallery">{thumbnails}</div>
  </div>
);

export default ProductList;
