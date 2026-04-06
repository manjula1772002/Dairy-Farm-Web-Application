"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem('cart');
      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch (error) {
      console.error('Error loading cart from localStorage:', error);
      setCartItems([]);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const removeFromCart = (productId) => {
    setCartItems(prevItems => {
      try {
        const newItems = prevItems.filter(item => item.id !== productId);
        localStorage.setItem('cart', JSON.stringify(newItems));
        window.dispatchEvent(new Event('storage'));
        return newItems;
      } catch (error) {
        console.error('Error removing item from cart:', error);
        return prevItems;
      }
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems => {
      try {
        const newItems = prevItems.map(item =>
          item.id === productId ? { ...item, quantity } : item
        );
        localStorage.setItem('cart', JSON.stringify(newItems));
        window.dispatchEvent(new Event('storage'));
        return newItems;
      } catch (error) {
        console.error('Error updating item quantity:', error);
        return prevItems;
      }
    });
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const clearCart = () => {
    try {
      setCartItems([]);
      localStorage.removeItem('cart');
      window.dispatchEvent(new Event('storage'));
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const totalPrice = getTotalPrice();
  const totalItems = getTotalItems();

//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
//         <div className="max-w-4xl mx-auto text-center">
//           <div className="text-6xl mb-6">⏳</div>
//           <h1 className="text-2xl font-bold text-gray-800 mb-4">Loading your cart...</h1>
//         </div>
//       </div>
//     );
//   }

  if (cartItems.length === 0) {
    return (
      <div  style={{
    minHeight: "100vh",
    backgroundColor: "#f9fafb",
    paddingTop: "48px",
    paddingBottom: "48px",
    paddingLeft: "16px",
    paddingRight: "16px",
  }}>
        <div className="max-w-4xl mx-auto text-center">
          
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
          <p className="text-xl text-gray-600 mb-8">
            Looks like you haven't added any dairy products to your cart yet.
          </p>
          <Link
            href="/product"
            className="bg-green-700  px-8 py-4 rounded-xl hover:bg-green-800 transition-all duration-200 font-semibold text-lg inline-block"
          >
            Browse Products 🥛
          </Link>
        </div>
      </div>
    );
  }

 return (
  <div
    style={{
      minHeight: "100vh",
      backgroundColor: "#f9fafb",
      padding: "48px 16px",
    }}
  >
    <div
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "32px",
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            color: "#1f2937",
          }}
        >
          Shopping Cart 🛒
        </h1>

        <span
          style={{
            fontSize: "18px",
            color: "#4b5563",
          }}
        >
          {totalItems} {totalItems === 1 ? "item" : "items"}
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr",
          gap: "32px",
        }}
      >
        {/* Cart Items */}
        <div>
          {cartItems.map((item) => (
            <div
              key={item.id}
              style={{
                backgroundColor: "white",
                borderRadius: "12px",
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                overflow: "hidden",
                border: "1px solid #f3f4f6",
                marginBottom: "16px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    width: "180px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    style={{
                      width: "100%",
                      height: "140px",
                      objectFit: "cover",
                    }}
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: "8px",
                      right: "8px",
                      backgroundColor: "green",
                      color: "white",
                      fontSize: "12px",
                      padding: "4px 8px",
                      borderRadius: "20px",
                      fontWeight: "600",
                    }}
                  >
                    {item.quantity}x
                  </div>
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "24px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <h3
                        style={{
                          fontSize: "24px",
                          fontWeight: "bold",
                          color: "#1f2937",
                          marginBottom: "8px",
                        }}
                      >
                        {item.name}
                      </h3>

                      <p
                        style={{
                          color: "#15803d",
                          fontWeight: "bold",
                          fontSize: "20px",
                          marginBottom: "12px",
                        }}
                      >
                        ₹{item.price} 
                      </p>

                      <p
                        style={{
                          color: "#4b5563",
                          fontSize: "18px",
                        }}
                      >
                        Subtotal:
                        <span
                          style={{
                            fontWeight: "bold",
                            color: "#166534",
                            marginLeft: "6px",
                          }}
                        >
                          ₹{item.price * item.quantity}
                        </span>
                      </p>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                      }}
                    >
                      <div
                        style={{
                          border: "1px solid black",
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          borderRadius: "8px",
                          padding: "4px 8px",
                        }}
                      >
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          style={{
                            padding: "8px 16px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                          }}
                        >
                          −
                        </button>

                        <span
                          style={{
                            fontWeight: "bold",
                            fontSize: "20px",
                            minWidth: "40px",
                            textAlign: "center",
                          }}
                        >
                          {item.quantity}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          style={{
                            padding: "8px 16px",
                            fontWeight: "bold",
                            fontSize: "20px",
                            border: "none",
                            background: "none",
                            cursor: "pointer",
                          }}
                        >
                          +
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          color: "red",
                          padding: "12px",
                          borderRadius: "8px",
                          border: "1px solid red",
                          background: "white",
                          cursor: "pointer",
                        }}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div>
          <div
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "24px",
              border: "1px solid #f3f4f6",
              position: "sticky",
              top: "16px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "24px",
              }}
            >
              Order Summary
            </h2>

            <div style={{ marginBottom: "16px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <span>Items ({totalItems})</span>
                <span>₹{totalPrice}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "16px",
                }}
              >
                <span>Delivery</span>
                <span style={{ color: "green" }}>Free</span>
              </div>

              <hr style={{ margin: "16px 0" }} />

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  fontWeight: "bold",
                  fontSize: "20px",
                }}
              >
                <span>Total</span>
                <span style={{ color: "green" }}>₹{totalPrice}</span>
              </div>
            </div>

            <button
              style={{
                width: "100%",
                backgroundColor: "#15803d",
                color: "white",
                padding: "16px",
                borderRadius: "12px",
                border: "none",
                fontWeight: "600",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
