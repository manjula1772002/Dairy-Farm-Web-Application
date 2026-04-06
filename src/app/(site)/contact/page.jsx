"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter valid email";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const newErrors = validateForm();

  if (Object.keys(newErrors).length > 0) {
    setErrors(newErrors);
    return;
  }

  alert("Form submitted successfully");

  setForm({
    name: "",
    email: "",
    message: "",
  });

  setErrors({});
};

  return (
    <div
      style={{
        backgroundColor: "#FDFBF7",
        padding: "48px 16px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "bold",
              color: "#1B3022", margin:" auto auto 10px auto",
            }}
          >
            Contact Us 📞
          </h1>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "48px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "16px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              padding: "40px",
            }}
          >
            <div style={{ textAlign: "center", marginBottom: "32px" }}>
              <h2
                style={{
                  fontSize: "36px",
                  fontWeight: "bold",
                  color: "#1B3022",
                }}
              >
                Send a Message
              </h2>
            </div>

            {submitted && (
              <div
                style={{
                  marginBottom: "24px",
                  backgroundColor: "#dcfce7",
                  color: "green",
                  padding: "16px",
                  borderRadius: "12px",
                  textAlign: "center",
                }}
              >
                Message Sent Successfully ✅
              </div>
            )}

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: "40px",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold" }}>Full Name</label>
                  <br />
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={form.name}
                    
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={{
                      border: "2px solid #ddd",
                      borderRadius: "10px",
                      padding: "6px",
                      width: "500px",
                      marginTop: "4px",
                    }}
                  />
                  {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold" }}>Email</label>
                  <br />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={form.email}
                    
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    style={{
                      border: "2px solid #ddd",
                      borderRadius: "10px",
                      padding: "6px",
                      width: "500px",
                      marginTop: "4px",
                    }}
                  />
                  {errors.email && (
                    <p style={{ color: "red" }}>{errors.email}</p>
                  )}
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <label style={{ fontWeight: "bold" }}>Message</label>
                  <br />
                  <textarea
                    rows="6"
                    value={form.message}
              
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    style={{
                      border: "2px solid #ddd",
                      borderRadius: "10px",
                      padding: "6px",
                      width: "500px",
                      marginTop: "4px",
                    }}
                  />
                  {errors.message && (
                    <p style={{ color: "red" }}>{errors.message}</p>
                  )}
                </div>
               <div>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#1B3022",
                    color: "white",
                    padding: "14px 20px",
                    borderRadius: "10px",
                    border: "none",
                    fontWeight: "bold",
                    cursor: "pointer",
                    width:"100%"
                  }}
                >
                  Send Message ✉️
                </button>
                </div>
              </form>
            </div>
          </div>
          <div style={{ height: "100%",
                flex: 1}} >
            <h3
              style={{
                
                fontSize: "40px",
                fontWeight: "bold",
                color: "#1B3022",
                marginBottom: "20px",
              }}
            >
              Get In Touch
            </h3>
            <div style={{fontSize:"20px",display:"flex",flexDirection:"column", gap:"10px"}}>
            <p>📍 RK Dairy Farm, India</p>
            <p>📞 +91 0000000000</p>
            <p>✉️ info@rkdairyfarm.com</p>
            <p>🕒 Mon - Sat: 6 AM - 8 PM</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}
