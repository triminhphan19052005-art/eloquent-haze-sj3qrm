import "./assets/css/main.css";
import anhlogo from "./assets/images/logo.png";
import { Outlet, Link, useNavigate } from "react-router-dom"; // Đảm bảo bạn sử dụng Link thay vì a
import { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <div>
      <header>
        <div id="divheader" className="header1">
          <div id="banner" className="banner1">
            <div id="topleft">
              <ul className="ul1">
                <li>
                  <Link to="/">TRANG CHỦ</Link>
                </li>
                <li>
                  <Link to="/egov">EGOV</Link>
                </li>
                <li>
                  <Link to="/admin/manage-products">QUẢN TRỊ</Link>
                </li>
              </ul>
            </div>
            <div id="logo" className="logo-container">
              <img src={anhlogo} alt="Logo" className="logo-small" />
            </div>
            <div id="divtimkiem" className="search-container">
              <input
                type="text"
                placeholder="Tìm kiếm..."
                className="search-input"
              />
            </div>
          </div>
          <div id="menubar" className="menubar">
            <div className="menubar-left">
              {/* Sửa đường dẫn sản phẩm */}
              <Link to="/productpage/1" className="menu-item">
                Sản Phẩm
              </Link>
              <Link to="/accessories" className="menu-item">
                Phụ Kiện
              </Link>
              <Link to="/promotions" className="menu-item">
                Khuyến Mãi
              </Link>
            </div>

            <div className="menubar-right">
              {user ? (
                <>
                  <span className="username">👤 {user.username}</span>
                  <button className="logout-btn" onClick={handleLogout}>
                    Đăng xuất
                  </button>
                </>
              ) : (
                <Link to="/login" className="login-link">
                  Đăng nhập
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div id="container" className="container">
        <Outlet />
      </div>

      <footer></footer>
    </div>
  );
};

export default Layout;
