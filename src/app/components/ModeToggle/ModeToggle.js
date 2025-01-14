"use client";

import { useEffect, useState } from 'react';
import styles from './ModeToggle.module.scss';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      if (savedTheme === 'light') {
        document.documentElement.classList.add('light');
      } else {
        document.documentElement.classList.remove('light');
      }
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
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
