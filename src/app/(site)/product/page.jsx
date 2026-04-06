"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const router = useRouter();

  const products = [
    { id: 1, name: "Milk", image: "/images/milk.png", price: 40 },
    { id: 2, name: "Curd", image: "/images/curd.png", price: 35 },
    { id: 3, name: "Ghee", image: "/images/ghee.png", price: 120 },
    { id: 4, name: "Paneer", image: "/images/paneer.png", price: 90 },
    { id: 5, name: "Cheese", image: "/images/cheese.png", price: 150 },
    { id: 6, name: "Butter", image: "/images/butter.png", price: 60 },
  ];

  let filteredProducts = products.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  if (sort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

 return (
  <div
    style={{
      padding: "30px",
      maxWidth: "1200px",
      margin: "0 auto",
    }}
  >
    <h1
      style={{
        fontWeight: "bold",
        fontSize: "32px",
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      Fresh Dairy Products 🥛
    </h1>

    {/* Search + Sort */}
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        marginBottom: "40px",
      }}
    >
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "10px 14px",
          width: "250px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <select
        value={sort}
        onChange={(e) => setSort(e.target.value)}
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      >
        <option value="">Sort</option>
        <option value="name">Name</option>
        <option value="low">Price Low to High</option>
        <option value="high">Price High to Low</option>
      </select>
    </div>

    {/* Product Grid */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px",
      }}
    >
      {filteredProducts.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
            textAlign: "center",
            transition: "0.3s",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "180px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "15px",
              backgroundColor: "#f9f9f9",
              borderRadius: "10px",
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{
                maxWidth: "140px",
                maxHeight: "140px",
                objectFit: "contain",
              }}
            />
          </div>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              marginBottom: "8px",
            }}
          >
            {item.name}
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "green",
              fontWeight: "600",
              marginBottom: "15px",
            }}
          >
            ₹{item.price}
          </p>

          <button
            style={{
              width: "100%",
              padding: "10px",
              backgroundColor: "green",
              color: "white",
              border: "none",
              borderRadius: "8px",
              cursor: "pointer",
              fontWeight: "600",
            }}
            onClick={() => {
              const cart = JSON.parse(
                localStorage.getItem("cart") || "[]"
              );

              const existingItem = cart.find(
                (cartItem) => cartItem.id === item.id
              );

              if (existingItem) {
                existingItem.quantity += 1;
              } else {
                cart.push({ ...item, quantity: 1 });
              }

              localStorage.setItem("cart", JSON.stringify(cart));
              alert(`${item.name} added to cart!`);
              router.push("/cart");
            }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  </div>
);
}