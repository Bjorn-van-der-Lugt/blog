"use client";

import { useState } from "react";
import styles from './NotificationsForm.module.scss';

export default function NotificationsForm() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { value, checked } = e.target;
    setSelectedCategories((prev) =>
      checked ? [...prev, value] : prev.filter((v) => v !== value)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedCategories.length === 0) {
      setError("Please select at least one category.");
      return; 
    }

    setError("");

    console.log("Selected Categories:", selectedCategories);

    await fetch("/api/notifications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ categories: selectedCategories }),
    });
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h3>Notifications</h3>
        <p>Receive email notifications whenever I post something new.</p>
        <h4>Select Categories</h4>

        <div className={styles.checkBoxContainer}>
          {["life", "soul", "fitness", "coding"].map((category) => (
            <label key={category} className={styles.label}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={handleChange}
                className={styles.input}
              />
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit" className={styles.button}>
          Save Preferences <i className="fa-duotone fa-solid fa-check"></i>
        </button>
      </form>
    </>
  );
}
