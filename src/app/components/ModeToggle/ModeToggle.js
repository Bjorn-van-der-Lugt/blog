"use client"

import { useEffect, useState } from 'react';
import styles from './ModeToggle.module.scss';

export default function ModeToggle() {
  const [theme, setTheme] = useState('light');

  // Ensures the theme is synced once the component is mounted on the client
  useEffect(() => {
    // Check localStorage or default to 'light' mode
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);  // Add class to <html> for global styles
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem('theme', newTheme);  // Save the theme preference
  };

  return (
    <>
      <h3>
        Color theme <i className="fa-duotone fa-solid fa-palette"></i>
      </h3>
      <p>Switch between light and dark mode.</p>
      <button onClick={toggleTheme} className={`${styles.modeToggle} mode-toggle`}>
        {theme === "light" ? (
          <i className={`${styles.bulb} fa-duotone fa-solid fa-lightbulb-slash`}></i>
        ) : (
          <i className={`${styles.bulb} fa-duotone fa-solid fa-lightbulb`}></i>
        )}
      </button>
    </>
  );
}
