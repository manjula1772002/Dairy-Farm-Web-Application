"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("Dashboard");
  const [products, setProducts] = useState([
    { id: 1, name: "Milk", price: 40, stock: 100 },
    { id: 2, name: "Curd", price: 35, stock: 50 },
    { id: 3, name: "Ghee", price: 120, stock: 30 },
    { id: 4, name: "Paneer", price: 90, stock: 20 },
    { id: 5, name: "Cheese", price: 150, stock: 15 },
    { id: 6, name: "Butter", price: 60, stock: 40 },
  ]);
  const [orders, setOrders] = useState([
    { id: 1, customer: "Rahul", total: 240, status: "Delivered" },
    { id: 2, customer: "Suma", total: 90, status: "Pending" },
    { id: 3, customer: "Anu", total: 160, status: "Processing" },
  ]);
  const [customers, setCustomers] = useState([
    { id: 1, name: "Manjula", email: "manjula@example.com" },
    { id: 2, name: "Vishnu", email: "vishnu@example.com" },
    { id: 3, name: "Suga", email: "suganthi@example.com" },
  ]);
  const [nextProductId, setNextProductId] = useState(7);
  const [theme, setTheme] = useState("light");
  const isDark = theme === "dark";
  const bgPage = isDark ? "#0f172a" : "#f3f4f6";
  const bgCard = isDark ? "#111827" : "white";
  const bgSidebar = isDark ? "#111827" : "white";
  const borderColor = isDark ? "#374151" : "#e2e8f0";
  const textPrimary = isDark ? "#f8fafc" : "#0f172a";
  const textSecondary = isDark ? "#d1d5db" : "#64748b";

  const addProduct = () => {
    setProducts(prev => [
      ...prev,
      { id: nextProductId, name: `New Product ${nextProductId}`, price: 0, stock: 0 },
    ]);
    setNextProductId(prev => prev + 1);
  };

  const removeProduct = (id) => {
    setProducts(prev => prev.filter(p => p.id !== id));
  };

  const updateStock = (id, newStock) => {
    setProducts(products.map(p => p.id === id ? { ...p, stock: newStock } : p));
  };

  const updatePrice = (id, newPrice) => {
    setProducts(products.map(p => p.id === id ? { ...p, price: newPrice } : p));
  };

  const handleLogout = () => {
    router.push('/login');
  };

  const getSectionTitle = () => {
    if (activeSection === "Inventory") return "Inventory";
    if (activeSection === "Orders") return "Orders";
    if (activeSection === "Customers") return "Customers";
    if (activeSection === "Settings") return "Settings";
    return "Dashboard";
  };

  const containerStyle = {
    minHeight: "100vh",
    background: bgPage,
    padding: "20px",
    fontFamily: "sans-serif",
    color: textPrimary,
  };

  const layoutStyle = {
    display: "flex",
    gap: "20px",
    maxWidth: "1400px",
    margin: "0 auto",
  };

  const sidebarStyle = {
    width: "260px",
    background: bgSidebar,
    borderRadius: "24px",
    border: `1px solid ${borderColor}`,
    padding: "24px",
    boxShadow: "0 16px 40px rgba(15,23,42,0.08)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  };

  const navItemStyle = {
    padding: "14px 18px",
    borderRadius: "18px",
    marginBottom: "10px",
    cursor: "pointer",
    color: "#0f172a",
    fontWeight: 600,
    background: "transparent",
    border: "none",
    width: "100%",
    textAlign: "left",
  };

  const selectedNavStyle = {
    background: "#eef2ff",
    color: "#3730a3",
  };

  const navHeaderStyle = {
    fontSize: "1.6rem",
    fontWeight: 700,
    marginBottom: "24px",
    color: "#0f172a",
  };

  const mainStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  };

  const topBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: bgCard,
    borderRadius: "24px",
    padding: "22px 28px",
    border: `1px solid ${borderColor}`,
    boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
  };

  const searchStyle = {
    flex: 1,
    margin: "0 20px",
    padding: "12px 18px",
    borderRadius: "18px",
    border: `1px solid ${borderColor}`,
    outline: "none",
    fontSize: "1rem",
    background: isDark ? "#1f2937" : "white",
    color: textPrimary,
  };

  const iconButtonStyle = {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    border: `1px solid ${borderColor}`,
    background: bgCard,
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    marginLeft: "10px",
    fontSize: "1rem",
    color: textPrimary,
  };

  const cardContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  };

  const summaryCardStyle = {
    background: bgCard,
    borderRadius: "24px",
    border: `1px solid ${borderColor}`,
    padding: "24px",
    boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
  };

  const productListStyle = {
    background: bgCard,
    borderRadius: "24px",
    border: `1px solid ${borderColor}`,
    padding: "24px",
    boxShadow: "0 16px 40px rgba(15,23,42,0.06)",
  };

  const sectionHeadingStyle = {
    margin: 0,
    fontSize: "1.5rem",
    color: "#0f172a",
  };

  const tableCellStyle = {
    padding: "14px 16px",
    color: "#334155",
  };

  const renderSection = () => {
    if (activeSection === "Inventory") {
      const totalItems = products.length;
      const lowStockCount = products.filter(p => p.stock < 25).length;

      return (
        <>
          <section style={cardContainerStyle}>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Total Items</p>
              <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: "#111827" }}>{totalItems}</h3>
            </div>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Low Stock</p>
              <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: "#111827" }}>{lowStockCount}</h3>
            </div>
          </section>

          <section style={productListStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Manage your inventory</p>
                <h3 style={{ margin: "8px 0 0", fontSize: "1.5rem", color: "#0f172a" }}>Products</h3>
              </div>
              <button onClick={addProduct} style={{ padding: "10px 16px", borderRadius: "14px", border: "1px solid #cbd5e1", background: "white", cursor: "pointer" }}>
                Add product
              </button>
            </div>
            <div style={{ width: "100%", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Product</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Price</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Stock Level</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map(product => (
                    <tr key={product.id} style={{ borderTop: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>{product.name}</td>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>₹{product.price}</td>
                      <td style={{ padding: "14px 16px", color: "#334155" }}><span style={{ padding: "6px 10px", borderRadius: "12px", background: product.stock < 25 ? "#fee2e2" : "#d1fae5", color: product.stock < 25 ? "#b91c1c" : "#166534" }}>{product.stock}</span></td>
                      <td style={{ padding: "14px 16px", display: "flex", gap: "10px" }}>
                        <button style={{ padding: "8px 12px", borderRadius: "12px", border: "none", background: "#3b82f6", color: "white", cursor: "pointer" }}>Edit</button>
                        <button onClick={() => removeProduct(product.id)} style={{ padding: "8px 12px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "white", color: "#0f172a", cursor: "pointer" }}>Remove</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      );
    }

    if (activeSection === "Orders") {
      const totalOrders = orders.length;
      const pendingOrders = orders.filter(order => order.status === "Pending").length;

      return (
        <>
          <section style={cardContainerStyle}>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Total Orders</p>
              <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: "#111827" }}>{totalOrders}</h3>
            </div>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Pending Orders</p>
              <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: "#111827" }}>{pendingOrders}</h3>
            </div>
          </section>
          <section style={productListStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Review recent orders</p>
                <h3 style={{ margin: "8px 0 0", fontSize: "1.5rem", color: "#0f172a" }}>Orders</h3>
              </div>
              <button style={{ padding: "10px 16px", borderRadius: "14px", border: "1px solid #cbd5e1", background: "white", cursor: "pointer" }}>View all</button>
            </div>
            <div style={{ width: "100%", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Order</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Customer</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Total</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: "#0f172a" }}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map(order => (
                    <tr key={order.id} style={{ borderTop: "1px solid #e2e8f0" }}>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>#{order.id}</td>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>{order.customer}</td>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>₹{order.total}</td>
                      <td style={{ padding: "14px 16px", color: "#334155" }}>
                        <span style={{ padding: "6px 10px", borderRadius: "12px", background: order.status === "Pending" ? "#fde68a" : "#d1fae5", color: order.status === "Pending" ? "#92400e" : "#166534" }}>{order.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      );
    }

    if (activeSection === "Customers") {
      const totalCustomers = customers.length;

      return (
        <>
          <section style={cardContainerStyle}>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Total Customers</p>
              <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: textPrimary }}>{totalCustomers}</h3>
            </div>
          </section>
          <section style={productListStyle}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
              <div>
                <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Customer directory</p>
                <h3 style={{ margin: "8px 0 0", fontSize: "1.5rem", color: textPrimary }}>Customers</h3>
              </div>
              <button style={{ padding: "10px 16px", borderRadius: "14px", border: `1px solid ${borderColor}`, background: bgCard, color: textPrimary, cursor: "pointer" }}>Add customer</button>
            </div>
            <div style={{ width: "100%", overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: textPrimary }}>Name</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: textPrimary }}>Email</th>
                    <th style={{ textAlign: "left", padding: "12px 16px", fontWeight: 700, color: textPrimary }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {customers.map(customer => (
                    <tr key={customer.id} style={{ borderTop: `1px solid ${borderColor}` }}>
                      <td style={{ padding: "14px 16px", color: textPrimary }}>{customer.name}</td>
                      <td style={{ padding: "14px 16px", color: textPrimary }}>{customer.email}</td>
                      <td style={{ padding: "14px 16px", color: textPrimary }}>
                        <button style={{ padding: "8px 12px", borderRadius: "12px", border: "none", background: "#3b82f6", color: "white", cursor: "pointer" }}>View</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        </>
      );
    }

    if (activeSection === "Settings") {
      return (
        <section style={productListStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Customize your admin panel</p>
              <h3 style={{ margin: "8px 0 0", fontSize: "1.5rem", color: textPrimary }}>Settings</h3>
            </div>
          </div>
          <div style={{ display: "grid", gap: "20px" }}>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Theme mode</p>
              <div style={{ marginTop: "18px", display: "flex", gap: "12px" }}>
                <button onClick={() => setTheme("light")} style={{ flex: 1, padding: "12px 16px", borderRadius: "14px", border: `1px solid ${borderColor}`, background: theme === "light" ? "#bfdbfe" : bgCard, color: textPrimary, cursor: "pointer" }}>
                  Light
                </button>
                <button onClick={() => setTheme("dark")} style={{ flex: 1, padding: "12px 16px", borderRadius: "14px", border: `1px solid ${borderColor}`, background: theme === "dark" ? "#4f46e5" : bgCard, color: theme === "dark" ? "white" : textPrimary, cursor: "pointer" }}>
                  Dark
                </button>
              </div>
            </div>
            <div style={summaryCardStyle}>
              <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Current theme</p>
              <p style={{ marginTop: "12px", color: textPrimary }}>You are using <strong>{theme}</strong> mode.</p>
            </div>
          </div>
        </section>
      );
    }

    return (
      <>
        <section style={cardContainerStyle}>
          <div style={summaryCardStyle}>
            <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Orders</p>
            <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: textPrimary }}>128</h3>
          </div>
          <div style={summaryCardStyle}>
            <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Customers</p>
            <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: textPrimary }}>76</h3>
          </div>
          <div style={summaryCardStyle}>
            <p style={{ margin: 0, color: textSecondary, fontSize: "0.95rem" }}>Stocks</p>
            <h3 style={{ margin: "16px 0 0", fontSize: "2rem", color: textPrimary }}>432</h3>
          </div>
        </section>

        <section style={productListStyle}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
            <div>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Inventory snapshot</p>
              <h3 style={{ margin: "8px 0 0", fontSize: "1.5rem", color: "#0f172a" }}>Products</h3>
            </div>
            <button style={{ padding: "10px 16px", borderRadius: "14px", border: "1px solid #cbd5e1", background: "white", cursor: "pointer" }}>View all</button>
          </div>
          <div style={{ display: "grid", gap: "14px" }}>
            {products.slice(0, 4).map(product => (
              <div key={product.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", borderRadius: "16px", border: "1px solid #e2e8f0", background: "#f8fafc" }}>
                <div>
                  <strong style={{ display: "block", fontSize: "1rem", color: "#0f172a" }}>{product.name}</strong>
                  <span style={{ color: "#475569" }}>₹{product.price} • {product.stock} in stock</span>
                </div>
                <div style={{ display: "flex", gap: "10px" }}>
                  <button style={{ padding: "8px 12px", borderRadius: "12px", border: "none", background: "#3b82f6", color: "white", cursor: "pointer" }}>Edit</button>
                  <button style={{ padding: "8px 12px", borderRadius: "12px", border: "1px solid #cbd5e1", background: "white", color: "#0f172a", cursor: "pointer" }}>Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </>
    );
  };

  return (
    <div style={containerStyle}>
      <div style={layoutStyle}>
        <aside style={sidebarStyle}>
          <div>
            <div style={navHeaderStyle}>Admin</div>
            <button onClick={() => setActiveSection("Dashboard")} style={{ ...navItemStyle, ...(activeSection === "Dashboard" ? selectedNavStyle : {}) }}>
              Dashboard
            </button>
            <button onClick={() => setActiveSection("Inventory")} style={{ ...navItemStyle, ...(activeSection === "Inventory" ? selectedNavStyle : {}) }}>
              Inventory
            </button>
            <button onClick={() => setActiveSection("Orders")} style={{ ...navItemStyle, ...(activeSection === "Orders" ? selectedNavStyle : {}) }}>
              Orders
            </button>
            <button onClick={() => setActiveSection("Customers")} style={{ ...navItemStyle, ...(activeSection === "Customers" ? selectedNavStyle : {}) }}>
              Customers
            </button>
            <button onClick={() => setActiveSection("Settings")} style={{ ...navItemStyle, ...(activeSection === "Settings" ? selectedNavStyle : {}) }}>
              Settings
            </button>
          </div>
          <div style={{ marginTop: "28px" }}>
            <button onClick={handleLogout} style={{ ...navItemStyle, background: "#f8fafc", color: "#dc2626", width: "100%", textAlign: "left", border: "none", backgroundColor: "#f8fafc" }}>
              Logout
            </button>
          </div>
        </aside>

        <main style={mainStyle}>
          <section style={topBarStyle}>
            <div>
              <p style={{ margin: 0, color: "#64748b", fontSize: "0.95rem" }}>Welcome back,</p>
              <h2 style={{ margin: "8px 0 0", fontSize: "1.9rem", color: "#0f172a" }}>{getSectionTitle()}</h2>
            </div>

            <input style={searchStyle} placeholder="Search" />

            <div style={{ display: "flex", alignItems: "center" }}>
              <button style={iconButtonStyle}>🔔</button>
              <button style={iconButtonStyle}>⭐</button>
              <button style={iconButtonStyle}>👤</button>
            </div>
          </section>

          {renderSection()}
        </main>
      </div>
    </div>
  );
};

export default Admin;