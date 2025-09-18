// SignUp.jsx
import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../Firebase.js";
import "./SignUp.css";

const SignUp = () => {
  const auth = getAuth(app);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [toast, setToast] = useState({ show: false, message: "" });
  const [fieldError, setFieldError] = useState({});
  const [generalError, setGeneralError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    setToast({ show: false, message: "" });
    setFieldError({});
    setGeneralError("");

    let errors = {};
    if (!email) errors.email = "❌ Please enter Email";
    if (!password) errors.password = "❌ Please enter Password";

    if (Object.keys(errors).length > 0) {
      setFieldError(errors);
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      setToast({ show: true, message: "✅ User registered successfully!" });
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error(err);
      setGeneralError("❌ " + err.message);
    }
  };

  return (
    <div className="signup-page">
      {/* Success Toast */}
      {toast.show && <div className="toast success">{toast.message}</div>}

      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {fieldError.email && <p className="error">{fieldError.email}</p>}

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {fieldError.password && <p className="error">{fieldError.password}</p>}

          <button type="submit">Sign Up</button>
        </form>

        {/* General error */}
        {generalError && (
          <p className="error" style={{ textAlign: "center" }}>{generalError}</p>
        )}

        {/* Sign In link */}
        <div className="toggle-text">
          Already have an account?{" "}
          <span className="toggle-link" onClick={() => window.location.href='/signin'}>
            Sign In
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
