"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from './MenuToggle.module.scss';
import ModeToggle from "../ModeToggle/ModeToggle";

export default function HeaderNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsNavOpen((prev) => !prev);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("main, footer");

    const toggleNavClass = (shouldOpen) => {
      elements.forEach((el) => el.classList.toggle("menu-open", shouldOpen));
    };

    toggleNavClass(isNavOpen);

    return () => toggleNavClass(false);
  }, [isNavOpen]);

  // Menu items array to avoid repetition
  const menuItems = [
    { href: "/", icon: "fa-house-blank", text: "Home" },
    { href: "/life", icon: "fa-masks-theater", text: "Life" },
    { href: "/soul", icon: "fa-eye", text: "Soul" },
    { href: "/fitness", icon: "fa-wreath-laurel", text: "Fitness" },
    { href: "/coding", icon: "fa-square-code", text: "Coding" },
    { href: "/about", icon: "fa-fingerprint", text: "About" },
    { href: "/contact", icon: "fa-mailbox", text: "Contact" },
  ];

  return (
    <>
      {/* Menu Toggle Button */}
      <button className={`${styles.MenuToggle} menu-toggle`} onClick={handleMenuToggle}>
        <i className={`fa-solid fa-bars ${styles.bars}`}></i>
      </button>

      {/* Navigation Header */}
      <header className={`${styles.header} ${isNavOpen ? styles.isOpen : ''}`}>
        <nav className={styles.headerNav}>
          <ul className={styles.headerUl}>
            {/* Render menu items dynamically */}
            {menuItems.map(({ href, icon, text }) => (
              <li key={href} className={styles.headerList}>
                <Link href={href} className={styles.link}>
                  <i className={`fa-duotone fa-solid ${icon} ${styles.icon}`}></i>
                  {text}
                </Link>
              </li>
            ))}

            {/* Donate Button */}
            <li className={styles.headerList}>
              <Link
                href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC"
                target="_blank"
                className={styles.link}
                rel="noopener noreferrer"
              >
                <i className={`fa-duotone fa-solid fa-hand-holding-circle-dollar ${styles.icon}`}></i>
                Donate
              </Link>
            </li>

            {/* Mode Toggle */}
            <li className={styles.headerList}><ModeToggle /></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

