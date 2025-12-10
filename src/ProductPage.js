import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Laptop Dell Inspiron 15",
      price: 15000000,
      image_url: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Laptop MacBook Air M1",
      price: 25000000,
      image_url: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Laptop Asus TUF Gaming",
      price: 19500000,
      image_url: "https://via.placeholder.com/200",
    },
  ]);

  const navigate = useNavigate();

  // Hàm thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} đã được thêm vào giỏ hàng.`);
  };

  return (
    <div className="product-page">
      <h1>Danh sách sản phẩm</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} VND</p>
            <button onClick={() => handleAddToCart(product)}>
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
      <button onClick={() => navigate("/cart")}>Xem giỏ hàng</button>
    </div>
  );
};

export default ProductPage;
