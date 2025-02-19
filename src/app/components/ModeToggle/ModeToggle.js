"use client";

import { useLayoutEffect, useState } from "react";
import styles from "./ModeToggle.module.scss";

export default function ModeToggle() {
  const [theme, setTheme] = useState(null); 

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  const toggleTheme = () => {
    if (!theme) return; 

    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (theme === null) return null;

  return (
    <>
      <button onClick={toggleTheme} className={`${styles.modeToggle} mode-toggle`}>
        {theme === "light" ? (
          <>
          <i className={`${styles.icon} fa-duotone fa-solid fa-moon`}></i>
          Dark
          </>
        ) : (
          <>
          <i className={`${styles.icon} fa-duotone fa-solid fa-sun`}></i>
          Light
          </>
        )}
      </button>
    </>
  );
}

