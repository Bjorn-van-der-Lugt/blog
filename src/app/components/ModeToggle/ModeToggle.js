"use client";

import { useEffect, useState } from 'react';
import styles from './ModeToggle.module.scss';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme); // Sync state with saved theme
      document.documentElement.classList.add(savedTheme);
      document.documentElement.classList.remove(savedTheme === 'light' ? 'dark' : 'light');
    } else if (!document.documentElement.classList.contains('light') && !document.documentElement.classList.contains('dark')) {
      // Only set default if no theme class exists
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.classList.add(newTheme);
    document.documentElement.classList.remove(theme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <>
      <h3>Color theme <i className="fa-duotone fa-solid fa-palette"></i></h3>
      <p>Switch between light and dark mode.</p>
      <button onClick={toggleTheme} className={`${styles.modeToggle} mode-toggle`}>
        {theme === 'light' ? (
          <i className={`fa-duotone fa-solid fa-lightbulb-slash ${styles.bulb}`}></i>
        ) : (
          <i className={`fa-duotone fa-solid fa-lightbulb ${styles.bulb}`}></i>
        )} 
      </button>
    </>
  );
}
