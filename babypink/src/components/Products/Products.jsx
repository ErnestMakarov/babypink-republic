import React, { useState } from "react";
import { products } from "../../data/products";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  // локальное состояние добавленных товаров (чисто визуально)
  const [addedItems, setAddedItems] = useState({});

  const goToProduct = (id) => {
    navigate(`/products/${id}`);
  };

  const handleAddToCart = (productId) => {
    setAddedItems((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  return (
    <div className="products-block"> 
      <div className="product_container">
        {products.map((product) => (
        <div className="item" key={product.id}>

          <div className="item_img">
            <img
              src={product.img}
              onClick={() => goToProduct(product.id)}
            />
          </div>

          <div className="item_text">
            <h2>{product.title}</h2>
            <p>{product.desc}</p>
            <b>{product.price}€</b>

            {/* кнопка "View product" */}
            <div
              className="view-product-btn"
              onClick={() => goToProduct(product.id)}
            >
              View product →
            </div>
          </div>

        </div>
      ))}
      </div>
    </div>
  );
};

export default Products;
