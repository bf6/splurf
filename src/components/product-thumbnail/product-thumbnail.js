import React from "react";
import "./product-thumbnail.css"

const ProductThumbnail = ({ title, price, imageUrl }) => (
  <div className="product-thumbnail">
    <figure className="product-thumbnail__figure">
      <img className="product-thumbnail__figure__image" src={imageUrl} alt={title} />
      <h2 className="product-thumbnail__figure__title">{title}</h2>
      <figcaption className="product-thumbnail__figure__description">
        {price}
      </figcaption>
    </figure>
  </div>
)

export default ProductThumbnail