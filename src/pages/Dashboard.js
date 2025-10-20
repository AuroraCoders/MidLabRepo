// src/pages/Dashboard.js
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaShoppingCart, FaStar, FaHeart } from "react-icons/fa";
import "./Dashboard.css";

const products = [
  { id: 1, name: "Lipstick", price: 25, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Perfume", price: 50, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Face Cream", price: 30, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Nail Polish", price: 15, image: "https://via.placeholder.com/150" },
];

function Dashboard() {
  const [code, setCode] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) navigate("/login");
    else loadCode();
  }, [user]);

  const loadCode = async () => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) setCode(docSnap.data().code);
  };

  const generateCode = async () => {
    const newCode = Math.floor(10000 + Math.random() * 90000).toString();
    setCode(newCode);
    await setDoc(doc(db, "users", user.uid), { code: newCode });
  };

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div>
      {/* Header */}
      <header className="header">
        <h1>Beauty Bliss</h1>
        <div className="right">
          <div className="code">Code: {code || "----"}</div>
          <button onClick={generateCode}>Generate Code</button>
          <div className="cart-icon">
            <FaShoppingCart size={24} />
            {cart.length > 0 && <div className="cart-badge">{cart.length}</div>}
          </div>
          <FaHeart size={24} style={{ cursor: "pointer", color: "pink" }} />
          <FaStar size={24} style={{ cursor: "pointer", color: "gold" }} />
        </div>
      </header>

      {/* Products Grid */}
      <main className="products">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default Dashboard;
