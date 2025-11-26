import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../data/products";
import { useCartContext } from "../../utils/CartContext";

export default function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const { addToCart } = useCartContext();

  const [selectedImage, setSelectedImage] = useState(product?.img || "");
  const [selectedSize, setSelectedSize] = useState(null);
  const [qty, setQty] = useState(1);

  if (!product) return <h2>Product not found</h2>;

  const flyToCart = () => {
    const img = document.querySelector(".main-img");
    const cartIcon = document.querySelector(".shop-cart-button");

    if (!img || !cartIcon) return;

    const imgRect = img.getBoundingClientRect();
    const cartRect = cartIcon.getBoundingClientRect();

    const imgClone = img.cloneNode(true);
    imgClone.style.position = "fixed";
    imgClone.style.left = imgRect.left + "px";
    imgClone.style.top = imgRect.top + "px";
    imgClone.style.width = imgRect.width + "px";
    imgClone.style.transition = "all 0.7s ease";
    imgClone.style.zIndex = 9999;
    imgClone.style.pointerEvents = "none";

    document.body.appendChild(imgClone);

    setTimeout(() => {
      imgClone.style.left = cartRect.left + "px";
      imgClone.style.top = cartRect.top + "px";
      imgClone.style.width = "20px";
      imgClone.style.opacity = "0.2";
    }, 30);

    setTimeout(() => imgClone.remove(), 800);
  };

  const handleAdd = () => {
    if (!selectedSize) return;

    addToCart(product, selectedSize, qty);

    flyToCart();
  };

  return (
    <div className="full-item">
      {/* GALLERY */}
      <div className="gallery">
        <img src={selectedImage} className="main-img" />

        <div className="small-images">
          {[product.img, ...(product.otherImages || [])].map((img, i) => (
            <img
              key={i}
              src={img}
              className={selectedImage === img ? "active" : ""}
              onClick={() => setSelectedImage(img)}
            />
          ))}
        </div>
      </div>

      {/* INFO */}
      <div className="info">
        <h2>{product.title}</h2>
        <p className="desc">{product.desc}</p>
        <b className="price">{product.price}€</b>

        {/* Sizes */}
        <div className="sizes">
          <p>Choose size:</p>
          <div className="sizes-list">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <div
                key={size}
                className={`size ${selectedSize === size ? "active" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Quantity */}
        <div className="qty-block">
          <p>Quantity:</p>
          <div className="qty-select">
            <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
            <span>{qty}</span>
            <button onClick={() => setQty((q) => q + 1)}>+</button>
          </div>
        </div>

        {/* Add button */}
        <button className="add-btn" disabled={!selectedSize} onClick={handleAdd}>
          {selectedSize ? "Add to cart" : "Choose size first"}
        </button>
      </div>
    </div>
  );
}
