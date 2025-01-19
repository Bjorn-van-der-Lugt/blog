"use client";

import { useEffect, useState } from "react";
import styles from './ArrowBackUp.module.scss';

export default function ArrowBackUp() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
    }, []); 

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={`${styles.ArrowBackUpButton} ${isVisible ? styles.show : ''}`}
            onClick={scrollToTop}
            aria-label="Back to Top"
        >
            <i className={`${styles.arrowIcon} fa-duotone fa-solid fa-arrow-up-right-dots`}></i>
        </button>
    );
}
