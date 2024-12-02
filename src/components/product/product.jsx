import React from 'react';
import './product.css';

const Product = ({ pro }) => {
  return (
    <div className="container-products-grid">
      <h1>AD Products</h1>
      <div className="products-grid">
        {pro.slice(0,8).map((items) => {
          return (
            <div className="product-container" key={items.id}>
              <div className="product-image-container">
                <img
                  className="product-image"
                  src={items.images}
                  alt={items.title}
                />
              </div>
              <div className="product-name">{items.title.substr(0, 25)}</div>
              <div className="product-price">${items.price}</div>
              <div className="product-quantity-container">
                <select defaultValue="1">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <button className="add-to-cart-button">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Product;  