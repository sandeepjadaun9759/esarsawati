// SignIn.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "../Firebase.js";

const SignIn = () => {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false); // Top popup

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateMobile = (number) => /^[0-9]{10}$/.test(number);
  const normalizeEmail = (email) => (email ?? "").trim().toLowerCase();
  const normalizeContact = (contact) => String(contact ?? "").replace(/\D/g, "");

  const signInUser = async () => {
    const trimmedIdentifier = identifier.trim();
    const trimmedPassword = password.trim();
    setMessage("");
    setSuccess(false);

    // Check for empty inputs
    if (!trimmedIdentifier && !trimmedPassword) {
      setMessage("❌ Please enter Email/Mobile and Password");
      return;
    }
    if (!trimmedIdentifier) {
      setMessage("❌ Please enter Email or Mobile");
      return;
    }
    if (!trimmedPassword) {
      setMessage("❌ Please enter Password");
      return;
    }

    // Validate email/mobile format
    if (trimmedIdentifier.includes("@") && !validateEmail(trimmedIdentifier)) {
      setMessage("❌ Please enter a valid email address");
      return;
    }
    if (/^[0-9]+$/.test(trimmedIdentifier) && !validateMobile(trimmedIdentifier)) {
      setMessage("❌ Mobile number must be 10 digits");
      return;
    }

    const db = getDatabase(app);
    const dbRef = ref(db);

    try {
      const snapshot = await get(child(dbRef, "A/2021/student"));
      if (!snapshot.exists()) {
        setMessage("❌ No users found in database");
        return;
      }

      const users = snapshot.val();
      let userFound = false;
      let passwordMatch = false;

      Object.keys(users).forEach((key) => {
        const user = users[key];
        const email = normalizeEmail(user.email);
        const whatsapp = normalizeContact(user.whatsapp);
        const fmobile = normalizeContact(user.fmobile_no);

        const match =
          (trimmedIdentifier.includes("@") && email === trimmedIdentifier.toLowerCase()) ||
          (!trimmedIdentifier.includes("@") &&
            (whatsapp === normalizeContact(trimmedIdentifier) ||
             fmobile === normalizeContact(trimmedIdentifier)));

        if (match) {
          userFound = true;
          if (user.password && user.password.trim() === trimmedPassword) {
            passwordMatch = true;
          }
        }
      });

      if (!userFound) {
        setIdentifier("");
        setPassword("");
        setMessage("❌ Email, WhatsApp, or Mobile Number is incorrect");
        return;
      }

      if (!passwordMatch) {
        setPassword("");
        setMessage("❌ Password is incorrect");
        return;
      }

      // Success
      setSuccess(true);
      setIdentifier("");
      setPassword("");
    } catch (err) {
      console.error("Firebase DB Error:", err);
      setMessage("❌ Error connecting to database");
    }
  };

  return (
    <div className="signin-page">
      {/* Success toast */}
      {success && <div className="toast success">✅ User signed in successfully!</div>}

      <div>
        <h2>Sign In</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signInUser();
          }}
        >
          <input
            type="text"
            placeholder="Email, WhatsApp, or Mobile Number"
            value={identifier}
            onChange={(e) => setIdentifier(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message && <p className="error">{message}</p>}
          <button type="submit">Sign In</button>
        </form>

        <div className="toggle-text">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
