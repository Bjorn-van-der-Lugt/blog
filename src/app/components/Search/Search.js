'use client';

import { useState, useEffect, useRef } from 'react';
import styles from './Search.module.scss';
import PreviewTile from '../PreviewTile/PreviewTile';

export default function Search() {
    const [isVisible, setIsVisible] = useState(false); 
    const [searchInput, setSearchInput] = useState('');
    const [showScrollToTop, setShowScrollToTop] = useState(false); 

    const mainScrollPosition = useRef(0); 
    const scrollContainerRef = useRef(null); 
    useEffect(() => {
        if (isVisible) {
            mainScrollPosition.current = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${mainScrollPosition.current}px`;
            document.body.style.overflowY = 'hidden';

            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollTop = 0;
            }

            setShowScrollToTop(false);
        } else {
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.overflowY = '';
            window.scrollTo(0, mainScrollPosition.current);
        }
    }, [isVisible]);

    useEffect(() => {
        const container = scrollContainerRef.current;

        if (!container) return;

        const handleScroll = () => {
            setShowScrollToTop(container.scrollTop > 300);
        };

        container.addEventListener('scroll', handleScroll);
        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, [isVisible]);

    const scrollToTop = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const toggleSearch = () => setIsVisible((prev) => !prev);

    const hideSearch = () => setIsVisible(false);

    const handleEraseText = () => setSearchInput('');

    const handleInputChange = (event) => setSearchInput(event.target.value);

    return (
        <div className={styles.searchContainerWrapper}>
            <button
                className={styles.searchButton}
                aria-label="Search"
                onClick={toggleSearch}
            >
                <i className="fa-duotone fa-solid fa-magnifying-glass"></i>
            </button>

            {isVisible && (
                <div
                    ref={scrollContainerRef} 
                    className={`${styles.searchContainer} ${styles.visible}`}
                >
                    <h2>Search <i className="fa-sharp-duotone fa-solid fa-magnifying-glass"></i></h2>
                    <p>Search a blog post by title, author, date, tag or any combination.</p>
                    <button className={styles.closeButton} onClick={hideSearch}>
                        <i className={`${styles.closeIcon} fa-duotone fa-solid fa-circle-xmark`}></i>
                    </button>

                    <form className={styles.searchBarWrapper} onSubmit={(e) => e.preventDefault()}>
                        <input
                            className={styles.searchBar}
                            placeholder="..."
                            value={searchInput}
                            onChange={handleInputChange}
                        />
                        <div className={styles.searchBarButtonWrapper}>
                            <button
                                type="button"
                                className={styles.eraseTextButton}
                                onClick={handleEraseText}
                            >
                                <i className="fa-duotone fa-solid fa-xmark"></i>
                            </button>
                            <button
                                type="submit"
                                className={styles.searchBarSendButton}
                            >
                                <i className="fa-duotone fa-solid fa-magnifying-glass"></i>
                            </button>
                        </div>
                    </form>

                    <div className={styles.resultWrapper}>
                        <PreviewTile />
                        <PreviewTile />
                        <PreviewTile />
                        <PreviewTile />
                        <PreviewTile />
                        <button className="load-more-button">Load More <i className="fa-duotone fa-solid fa-brain"></i></button>
                    </div>

                    {showScrollToTop && (
                        <button
                            className={styles.ArrowBackUpButton}
                            onClick={scrollToTop}
                            aria-label="Scroll to Top"
                        >
                            <i className="fa-duotone fa-solid fa-arrow-up-right-dots"></i>
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}
