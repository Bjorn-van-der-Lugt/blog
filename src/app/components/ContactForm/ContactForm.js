"use client";

import { useEffect, useState } from "react";

export default function FormComponent() {
  const [isMounted, setIsMounted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    subject: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div>Loading...</div>;
  }

  const sanitizeInput = (input) => {
    return input.replace(/[<>]/g, "").trim(); 
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    const sanitizedFullName = sanitizeInput(formData.fullName);
    const sanitizedSubject = sanitizeInput(formData.subject);
    const sanitizedEmail = sanitizeInput(formData.email);
    const sanitizedMessage = sanitizeInput(formData.message);

    if (!sanitizedFullName) {
      newErrors.fullName = "Full name is required.";
    } else if (sanitizedFullName.length > 50) {
      newErrors.fullName = "Full name must be less than 50 characters.";
    }

    if (!sanitizedSubject) {
      newErrors.subject = "Subject is required.";
    } else if (sanitizedSubject.length > 50) {
      newErrors.subject = "Subject must be less than 50 characters.";
    }

    if (!sanitizedEmail) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(sanitizedEmail)) {
      newErrors.email = "Invalid email address.";
    }

    if (!sanitizedMessage) {
      newErrors.message = "Message is required.";
    } else if (sanitizedMessage.length > 1000) {
      newErrors.message = "Message must be less than 1000 characters.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      alert("Form submitted successfully!");
      setFormData({
        fullName: "",
        subject: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        placeholder="Enter your full name"
        value={formData.fullName}
        onChange={handleChange}
      />
      {errors.fullName && <span className="error">{errors.fullName}</span>}

      <label htmlFor="subject">Subject</label>
      <input
        id="subject"
        name="subject"
        placeholder="Enter subject"
        value={formData.subject}
        onChange={handleChange}
      />
      {errors.subject && <span className="error">{errors.subject}</span>}

      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        placeholder="Enter your email address"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <span className="error">{errors.email}</span>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={handleChange}
      />
      {errors.message && <span className="error">{errors.message}</span>}

      <button type="submit">Submit <i className="fa-duotone fa-solid fa-paper-plane"></i></button>
    </form>
  );
}
