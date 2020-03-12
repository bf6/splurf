import React from "react";
import "./product-detail.css"


const ProductDetail = ({ title, price, rating, imageUrl, description }) => (
  <div className="product-detail">
    <div className="product-detail__image">
      <img src={imageUrl} alt={title} />
    </div>
    <div className="product-detail__detail">
      <h2 className="product-detail__detail__title">{title}</h2>
      <h3 className="product-detail__detail__rating">{`⭐`.repeat(rating)}</h3>
      <p className="product-detail__detail__description">{description}</p>
      <p className="product-detail__detail__price">{price}</p>
    </div>
  </div>
)

export default ProductDetail;