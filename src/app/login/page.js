"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Login() {
  const [isClient, setIsClient] = useState(false);
  const [emailError, setEmailError] = useState(""); 
  const [passwordError, setPasswordError] = useState(""); 
  const [formData, setFormData] = useState({ email: "", password: "" }); 

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    if (password.length < 8) {
      return "Password must be at least 8 characters long.";
    }
    const commonPassword = "password";
    if (commonPassword.includes(password.toLowerCase())) {
      return "Bro really ?";
    }
    return ""; 
  };

  const sanitizeInput = (input) => {
    return input.trim(); 
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    if (name === "email") {
      setEmailError(
        validateEmail(sanitizedValue) ? "" : "Please enter a valid email address."
      );
    } else if (name === "password") {
      setPasswordError(validatePassword(sanitizedValue));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailIsValid = validateEmail(formData.email);
    const passwordValidationError = validatePassword(formData.password);

    if (!emailIsValid) {
      setEmailError("Please enter a valid email address.");
    }
    if (passwordValidationError) {
      setPasswordError(passwordValidationError);
    }

    if (emailIsValid && !passwordValidationError) {
      console.log("Form submitted successfully with data:", formData);
    }
  };

  if (!isClient) {
    return <div className="page-container">Loading...</div>;
  }

  return (
    <div className="page-container">
      <h1>Login</h1>
      <p>Access your personal data and manage your user preferences.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleInputChange}
        />
        {emailError && <span className="error">{emailError}</span>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {passwordError && <span className="error">{passwordError}</span>}

        <button type="submit">
          Login <i className="fa-duotone fa-solid fa-arrow-right-to-bracket"></i>
        </button>
      </form>
      <p>
        New here? <Link href="/create-account">Create an account</Link>.
      </p>
      </div>
  );
}
