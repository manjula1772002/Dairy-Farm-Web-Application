"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin123") {
      router.push('/admin');
    } else if (username === "Manjula" && password === "123456") {
      setIsLoggedIn(true);
    } else {
      alert("Wrong username or password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const pageStyle = {
    minHeight: "100vh",
    padding: "24px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "white",
  };

  const cardStyle = {
    width: "100%",
    maxWidth: "680px",
    borderRadius: "28px",
    overflow: "hidden",
    boxShadow: "0 24px 64px rgba(15, 23, 42, 0.12)",
    background: "rgba(255, 255, 255, 0.96)",
    border: "1px solid rgba(148, 163, 184, 0.18)",
  };

  const headerStyle = {
    backgroundColor: "White",
    color: "Black",
    padding: "40px 36px",
    borderRadius:"10px",
  };

  const headerTitleStyle = {
    margin: 0,
    fontSize: "2.4rem",
    fontWeight: 700,
    letterSpacing: "-0.04em",
  };

  const headerTextStyle = {
    marginTop: "12px",
    color: "#dbeafe",
    lineHeight: 1.6,
    
    maxWidth: "520px",
  };

  const contentStyle = {
    padding: "34px 36px 42px",
  };

  const sectionStyle = {
    marginBottom: "24px",
  };

  const profileCardStyle = {
    borderRadius: "28px",
    border: "1px solid #d1d5db",
    background: "#f8fafc",
    padding: "24px",
    display: "flex",
    gap: "18px",
    alignItems: "center",
  };

  const profileAvatarStyle = {
    width: "72px",
    height: "72px",
    borderRadius: "50%",
    background: "#cbd5e1",
    display: "grid",
    placeItems: "center",
    fontSize: "1.8rem",
    color: "#334155",
    fontWeight: 700,
  };

  const infoCardStyle = {
    borderRadius: "24px",
    border: "1px solid #e2e8f0",
    background: "white",
    padding: "20px",
    boxShadow: "0 8px 24px rgba(15, 23, 42, 0.06)",
  };

  const cardGridStyle = {
    display: "grid",
    gap: "18px",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    marginBottom: "24px",
  };

  const buttonPrimary = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "18px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: 600,
    backgroundColor: "Green",
  };

  const buttonDanger = {
    width: "100%",
    padding: "14px 18px",
    borderRadius: "18px",
    border: "none",
    cursor: "pointer",
    color: "white",
    fontWeight: 600,
    backgroundColor: "#ef4444",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "10px",
    color: "#334155",
    fontWeight: 600,
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "16px",
    border: "1px solid #cbd5e1",
    background: "#f8fafc",
    color: "#0f172a",
    outline: "none",
    fontSize: "1rem",
  };

  const textStyle = {
    margin: 0,
    color: "#64748b",
    lineHeight: 1.7,
  };

  return (
    <div style={pageStyle}>
         <div style={cardStyle}>
        <div style={contentStyle}>
         {isLoggedIn ?(
            <div>
        <div style={headerStyle}>
          <h1 style={headerTitleStyle}>RK Dairy Farm</h1>
          <p style={headerTextStyle}>Fresh login interface for your dairy products dashboard.</p>
        </div>
              <div style={{ ...sectionStyle, ...profileCardStyle }}>
                <div style={profileAvatarStyle}>{username.charAt(0).toUpperCase()}</div>
                <div>
                  <p style={{ ...textStyle, marginBottom: "8px" }}>Welcome back</p>
                  <h2 style={{ margin: 0, fontSize: "1.8rem", color: "#0f172a" }}>{username}</h2>
                </div>
              </div>

              <div style={cardGridStyle}>
                <div style={infoCardStyle}>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#64748b" }}>Active Orders</p>
                  <p style={{ margin: "14px 0 0", fontSize: "2rem", fontWeight: 700, color: "#0f172a" }}>2</p>
                </div>
                <div style={infoCardStyle}>
                  <p style={{ margin: 0, fontSize: "0.95rem", color: "#64748b" }}>Wishlist Items</p>
                  <p style={{ margin: "14px 0 0", fontSize: "2rem", fontWeight: 700, color: "#0f172a" }}>5</p>
                </div>
              </div>

              <div style={{ ...sectionStyle, ...infoCardStyle }}>
                <h3 style={{ margin: 0, fontSize: "1.2rem", color: "#0f172a" }}>Account summary</h3>
                <ul style={{ marginTop: "16px", paddingLeft: "20px", color: "#475569", lineHeight: 1.9 }}>
                  <li>Your next delivery is scheduled for tomorrow.</li>
                  <li>No new notifications.</li>
                  <li>Manage your preferences from the dashboard.</li>
                </ul>
              </div>

              <button style={buttonDanger} onClick={handleLogout}>
                Logout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: "grid", gap: "20px" }}>
              <p style={textStyle}>Enter your username and password to continue.</p>

              <div>
                <label style={labelStyle}>Username</label>
                <input
                  type="text"
                  placeholder="Name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={inputStyle}
                />
              </div>

              <button type="submit" style={buttonPrimary}>
                Login
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;