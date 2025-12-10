import "./styles.css";
// @ts-ignore
import Home from "./Home";
// @ts-ignore
import Layout from "./Layout";
// @ts-ignore
import Trang1 from "./Trang1";
// @ts-ignore
import Chitietsanpham from "./Chitietsanpham";
// @ts-ignore
import ProductDetail from "./ProductDetail";
// @ts-ignore
import ListProducts from "./ListProducts";
// @ts-ignore
import ListProducts_SP from "./ListProducts_SP";
// @ts-ignore
import Trang2 from "./Trang2";
// @ts-ignore
import LoginPage from "./LoginPage";
// @ts-ignore
import LogoutPage from "./LogoutPage";
// @ts-ignore
import ProtectedRoute from "./ProtectedRoute";
// @ts-ignore
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
// @ts-ignore
import EditProduct from "./EditProduct";
// @ts-ignore
import Accessories from "./Accessories"; // Thêm import Accessories

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout chung cho toàn bộ hệ thống */}
        <Route path="/" element={<Layout />}>
          {/* Trang chính (cho người dùng vãng lai) */}
          <Route index element={<ListProducts_SP />} />
          <Route path="trang1" element={<Trang1 />} />
          <Route path="trang2" element={<Trang2 />} />
          {/* Đổi đường dẫn cho sản phẩm thành productpage */}
          <Route path="productpage/:id" element={<Chitietsanpham />} />
          <Route path="/admin/edit/:id" element={<EditProduct />} />
          {/* Trang phụ kiện */}
          <Route path="accessories" element={<Accessories />} />{" "}
          {/* Thêm route cho phụ kiện */}
          {/* Trang đăng nhập */}
          <Route path="login" element={<LoginPage />} />
          <Route path="logout" element={<LogoutPage />} />
          {/* Trang quản trị */}
          <Route
            path="admin/products"
            element={
              <ProtectedRoute>
                <ListProducts_SP_Admin />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
