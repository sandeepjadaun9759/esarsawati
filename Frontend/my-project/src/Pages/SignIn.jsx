import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getDatabase, ref, get, child } from "firebase/database";
import { app } from "../Firebase.js";
import "./SignIn.css";

const SignIn = () => {
  const history = useHistory();
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const normalizeEmail = (email) => (email ?? "").trim().toLowerCase();
  const normalizeContact = (contact) => String(contact ?? "").replace(/\D/g, "");

  const signInUser = async () => {
    const trimmedIdentifier = identifier.trim();
    const trimmedPassword = password.trim();
    setMessage("");
    setSuccess(false);

    if (!trimmedIdentifier || !trimmedPassword) {
      setMessage("❌ Please enter Email/Mobile and Password");
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
      let matchedUser = null;

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

        if (match && user.password && user.password.trim() === trimmedPassword) {
          matchedUser = user;
        }
      });

      if (!matchedUser) {
        setMessage("❌ Invalid Email/WhatsApp/Mobile or Password");
        setPassword("");
        return;
      }

      // ✅ Save student info in localStorage
      localStorage.setItem("studentName", matchedUser.name);
      localStorage.setItem("classId", matchedUser.section_id || matchedUser.previous_class || "");

      setSuccess(true);
      setIdentifier("");
      setPassword("");

      // Redirect to Fees page
      history.push("/menubar/fees");
    } catch (err) {
      console.error("Firebase DB Error:", err);
      setMessage("❌ Error connecting to database");
    }
  };

  return (
    <div className="signin-page">
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
