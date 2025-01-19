"use client";

import { useState, useEffect } from "react";
import Link from 'next/link';
import styles from './MenuToggle.module.scss';

export default function HeaderNav() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleMenuToggle = () => {
    const newState = !isNavOpen;
    setIsNavOpen(newState);
  };

  useEffect(() => {
    const elements = document.querySelectorAll("main, footer");
    if (isNavOpen) {
      elements.forEach((el) => el.classList.add("menu-open"));
    } else {
      elements.forEach((el) => el.classList.remove("menu-open"));
    }
  
    return () => {
      elements.forEach((el) => el.classList.remove("menu-open"));
    };
  }, [isNavOpen]);
  

  return (
    <>
     <button className={`${styles.MenuToggle} menu-toggle`} onClick={handleMenuToggle}>
        <i className={`fa-solid fa-bars ${styles.bars}`}></i>
      </button>
      <header className={`${styles.header} ${isNavOpen ? styles.isOpen : ''}`}>
      <nav className={styles.headerNav}>
          <ul className={styles.headerUl}>
            <li className={styles.headerList}><Link href="/" className={styles.link}><i className={`fa-duotone fa-solid fa-house-blank ${styles.icon}`}> </i>Home</Link></li>
            <li className={styles.headerList}><Link href="/life" className={styles.link}><i className={`fa-duotone fa-solid fa-masks-theater ${styles.icon}`}></i>Life</Link></li>
            <li className={styles.headerList}><Link href="/soul" className={styles.link}><i className={`fa-duotone fa-solid fa-eye ${styles.icon}`}></i>Soul</Link></li>
            <li className={styles.headerList}><Link href="/fitness" className={styles.link}><i className={`fa-duotone fa-solid fa-wreath-laurel ${styles.icon}`}></i>Fitness</Link></li>
            <li className={styles.headerList}><Link href="/coding" className={styles.link}><i className={`fa-duotone fa-solid fa-square-code ${styles.icon}`}></i>Coding</Link></li>
            <li className={styles.headerList}><Link href="/about" className={styles.link}><i className={`fa-duotone fa-solid fa-fingerprint ${styles.icon}`}></i> About</Link></li>
            <li className={styles.headerList}><Link href="/contact" className={styles.link}><i className={`fa-duotone fa-solid fa-mailbox ${styles.icon}`}></i> Contact</Link></li>
            <li className={styles.headerList}><Link href="/login" className={styles.link}><i className={`fa-duotone fa-solid fa-user ${styles.icon}`}></i> Login</Link></li>
            <li className={styles.headerList}><Link href="/account-settings" className={styles.link}><i className={`fa-duotone fa-solid fa-gears ${styles.icon}`}></i>Settings</Link></li>
            <li className={styles.headerList}>
              <Link href="https://www.paypal.com/donate/?hosted_button_id=NCRQHDJWRPDHC" 
                    target="_blank" 
                    className={styles.link}
                    rel="noopener noreferrer">
                      <i className={`fa-duotone fa-solid fa-hand-holding-circle-dollar ${styles.icon}`}></i> Donate
                </Link>
              </li>
          </ul>
      </nav>
    </header>
    </>
  );
}
