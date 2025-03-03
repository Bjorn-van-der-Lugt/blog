"use client"; 

import { useState, useEffect, useRef } from "react";
import styles from "./ResponsiveImageClient.module.scss"
import ResponsiveImageServer from "../ResponsiveImageServer/ResponsiveImageServer";

export default function ResponsiveImageClient({ src, alt, priority, aspectRatio }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [renderedHeight, setRenderedHeight] = useState(0);
    const imageContainerRef = useRef(null);

    useEffect(() => {
        const observer = new ResizeObserver(entries => {
            for (let entry of entries) {
                setRenderedHeight(entry.contentRect.height);
            }
        });

        if (imageContainerRef.current) {
            observer.observe(imageContainerRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const isExpandable = renderedHeight > 600;

    return (
        <div 
            className={`${styles.wrapper} ${isExpandable && isExpanded ? styles.expanded : ""} ${isExpandable ? styles.expandable : ""} wrapper`} 
            onClick={() => isExpandable && setIsExpanded(!isExpanded)}
        >
            {isExpandable && <div className={styles.overlay}><i className={`${styles.expandIcon} fa-duotone fa-expand`}></i></div>}

            <div ref={imageContainerRef} className={styles.imageContainer}>
                <ResponsiveImageServer 
                    src={src} 
                    alt={alt} 
                    priority={priority} 
                    aspectRatio={aspectRatio} 
                />
            </div>
        </div>
    );
}
