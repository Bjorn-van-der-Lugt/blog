"use client";

import styles from "./CommentSection.module.scss";

export default function CommentSection() {
    return (
        <>
        <section>
           
            <h2>Comments</h2>
               <div className={styles.buttonContainer}>
               <button className={styles.button}>
                    <i className={`fa-duotone fa-solid fa-thumbs-up ${styles.icon}`}></i> 
                    <span> 72K</span>
                </button>
                <button className={styles.button}>
                    <i className={`fa-duotone fa-solid fa-thumbs-down ${styles.icon}`}></i>
                    <span> 1k</span>
                </button>
                <button className={styles.button}>
                    <i className={`fa-duotone fa-solid fa-share-nodes ${styles.icon}`}></i> 
                    Share
                </button>
               </div>
                <form>
                <textarea></textarea>
            </form>
        </section>
        </>
    )
}