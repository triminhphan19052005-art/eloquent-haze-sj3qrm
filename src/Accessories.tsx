import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient"; // đúng đường dẫn + đúng tên biến

interface Accessory {
  id: number;
  name: string;
  description: string;
  image_url: string;
}

const Accessories: React.FC = () => {
  const [accessories, setAccessories] = useState<Accessory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAccessories = async () => {
      const { data, error } = await supabase.from("accessories").select("*");

      if (error) {
        console.error("Supabase Error:", error);
      } else {
        setAccessories(data || []);
      }
      setLoading(false);
    };

    fetchAccessories();
  }, []);

  if (loading) return <p>Đang tải dữ liệu...</p>;

  return (
    <div>
      <h1>Phụ Kiện PC</h1>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {accessories.map((item) => (
          <li
            key={item.id}
            style={{
              display: "flex",
              marginBottom: "20px",
              alignItems: "center",
            }}
          >
            <img
              src={item.image_url}
              alt={item.name}
              style={{
                width: 120,
                height: 120,
                borderRadius: 10,
                marginRight: 20,
                objectFit: "cover",
              }}
            />
            <div>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Accessories;
