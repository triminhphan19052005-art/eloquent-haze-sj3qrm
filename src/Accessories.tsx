import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";

/* ================== TYPE ================== */
interface Accessory {
  id: number;
  name: string;
  description: string;
  image_url: string;
  price: number;
}

interface CartItem extends Accessory {
  quantity: number;
}

/* ================== COMPONENT ================== */
const Accessories: React.FC = () => {
  const [products, setProducts] = useState<Accessory[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);

  /* ===== LOAD PRODUCT ===== */
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await supabase.from("accessories").select("*");
      setProducts(data || []);
    };
    fetchData();
  }, []);

  /* ===== CART LOGIC ===== */
  const addToCart = (item: Accessory) => {
    setCart((prev) => {
      const exist = prev.find((p) => p.id === item.id);
      if (exist) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  /* ===== SUBMIT ORDER ===== */
  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderSuccess(true);
    setCart([]);
  };

  return (
    <div style={styles.container}>
      <h1>🖥️ Phụ Kiện PC</h1>

      {/* ===== PRODUCT LIST ===== */}
      <h2>Sản phẩm</h2>
      {products.map((item) => (
        <div key={item.id} style={styles.card}>
          <img src={item.image_url} style={styles.image} />
          <div>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p style={styles.price}>
              {item.price.toLocaleString("vi-VN")} ₫
            </p>
            <button onClick={() => addToCart(item)}>Thêm vào giỏ</button>
          </div>
        </div>
      ))}

      {/* ===== CART ===== */}
      <h2>🛒 Giỏ hàng</h2>
      {cart.length === 0 && <p>Chưa có sản phẩm</p>}

      {cart.map((item) => (
        <div key={item.id} style={styles.cartItem}>
          <span>
            {item.name} × {item.quantity}
          </span>
          <span>
            {(item.price * item.quantity).toLocaleString("vi-VN")} ₫
          </span>
          <button onClick={() => removeFromCart(item.id)}>X</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3>
            Tổng tiền:{" "}
            <span style={{ color: "red" }}>
              {totalPrice.toLocaleString("vi-VN")} ₫
            </span>
          </h3>
          <button onClick={() => setShowCheckout(true)}>
            Thanh toán
          </button>
        </>
      )}

      {/* ===== CHECKOUT ===== */}
      {showCheckout && (
        <form onSubmit={handleCheckout} style={styles.checkout}>
          <h2>💳 Thanh toán</h2>

          <input required placeholder="Họ tên" />
          <input required placeholder="Số điện thoại" />
          <input required placeholder="Địa chỉ giao hàng" />

          <select required>
            <option>Thanh toán khi nhận hàng (COD)</option>
            <option>Chuyển khoản ngân hàng</option>
          </select>

          <button type="submit">Xác nhận đặt hàng</button>
        </form>
      )}

      {/* ===== SUCCESS ===== */}
      {orderSuccess && (
        <p style={{ color: "green", marginTop: 20 }}>
          ✅ Đặt hàng thành công! Cảm ơn bạn.
        </p>
      )}
    </div>
  );
};

export default Accessories;

/* ================== CSS ================== */
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 20,
  },
  card: {
    display: "flex",
    gap: 20,
    padding: 12,
    marginBottom: 12,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 2px 8px rgba(0,0,0,.1)",
  },
  image: {
    width: 120,
    height: 120,
    objectFit: "cover",
    borderRadius: 8,
  },
  price: {
    color: "red",
    fontWeight: "bold",
  },
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 6,
  },
  checkout: {
    marginTop: 20,
    padding: 20,
    background: "#f9f9f9",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
};



