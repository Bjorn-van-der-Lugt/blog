"use client";

import { useState, useEffect } from "react";

export default function CreateAccount() {
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  const validateField = (name, value) => {
    switch (name) {
      case "firstName":
      case "lastName":
        if (value.trim() === "") {
          return "This field is required.";
        }
        if (!/^[a-zA-Z]+$/.test(value)) {
          return "Only letters are allowed.";
        }
        if (value.length > 50) {
          return "Cannot exceed 50 characters.";
        }
        return "";
      case "email":
        if (value.trim() === "") {
          return "Email is required.";
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return "Please enter a valid email address.";
        }
        return "";
      case "password":
        if (value.trim() === "") {
          return "Password is required.";
        }
        if (value.length < 8) {
          return "Password must be at least 8 characters long.";
        }
        if (value === "password") {
          return "Bro really?";
        }
        if (value === value.toLowerCase()) {
          return "Password must contain at least one uppercase letter.";
        }
        return "";
      case "confirmPassword":
        if (value.trim() === "") {
          return "Please confirm your password.";
        }
        if (value !== formData.password) {
          return "Passwords do not match.";
        }
        return "";
      default:
        return "";
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    const sanitizedValue = value.trim();
    setFormData((prev) => ({
      ...prev,
      [name]: sanitizedValue,
    }));

    const errorMessage = validateField(name, sanitizedValue);
    setErrors((prev) => ({
      ...prev,
      [name]: errorMessage,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    let isValid = true;

    Object.keys(formData).forEach((field) => {
      const error = validateField(field, formData[field]);
      newErrors[field] = error;
      if (error) isValid = false;
    });

    setErrors(newErrors);

    if (isValid) {
      console.log("Form submitted successfully with data:", formData);
    }
  };

  if (!isClient) {
    return <div>Loading...</div>;
  }

  return (
    <div className="page-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="first-name">First Name</label>
        <input
          id="first-name"
          name="firstName"
          placeholder="Enter your first name"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        {errors.firstName && <span className="error">{errors.firstName}</span>}

        <label htmlFor="last-name">Last Name</label>
        <input
          id="last-name"
          name="lastName"
          placeholder="Enter your last name"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        {errors.lastName && <span className="error">{errors.lastName}</span>}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formData.email}
          onChange={handleInputChange}
        />
        {errors.email && <span className="error">{errors.email}</span>}

        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          placeholder="Enter a unique username"
          value={formData.username}
          onChange={handleInputChange}
        />
        {errors.username && <span className="error">{errors.username}</span>}

        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter a unique password"
          value={formData.password}
          onChange={handleInputChange}
        />
        {errors.password && <span className="error">{errors.password}</span>}

        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          id="confirm-password"
          name="confirmPassword"
          type="password"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleInputChange}
        />
        {errors.confirmPassword && (
          <span className="error">{errors.confirmPassword}</span>
        )}

        <button type="submit">
          Create Account <i className="fa-duotone fa-solid fa-user"></i>
        </button>
      </form>
      </div>
  );
}
