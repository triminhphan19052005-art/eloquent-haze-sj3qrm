import React from "react";
import "./assets/css/main.css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  // Danh sách sản phẩm mẫu
  const products = [
    {
      id: 1,
      name: "Laptop Dell Inspiron 15",
      price: "15,000,000 VND",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Laptop MacBook Air M1",
      price: "25,000,000 VND",
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Laptop Asus TUF Gaming",
      price: "19,500,000 VND",
      image: "https://via.placeholder.com/200",
    },
  ];

  return (
    <div className="home-page">
      {/* Banner */}
      <div className="banner">
        <h1>Chào Mừng Đến Với Cửa Hàng PC</h1>
        <p>Tìm kiếm và chọn mua các sản phẩm máy tính chất lượng cao</p>
      </div>

      {/* Sản phẩm */}
      <div className="product-list">
        {products.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Cửa Hàng PC. Tất cả các quyền được bảo lưu.</p>
      </footer>
    </div>
  );
};

export default HomePage;
