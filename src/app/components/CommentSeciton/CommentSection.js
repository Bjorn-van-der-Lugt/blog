"use client";

import styles from "./CommentSection.module.scss";
import Image from "next/image";

export default function CommentSection() {
    return (
        <>
        <section>
            <h2>Comments <i className="fa-duotone fa-solid fa-comments"></i></h2>
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
               
                    
                    <form className={styles.profileForm}>
                    <div className={styles.profileDisplay}>
                <Image className={styles.profileThumbNail} src="/images/profile-thumbnail.webp" width={75} height={75}></Image>
                <p className={styles.profileName}><strong>Björn van der Lugt</strong> <i className={`${styles.icon} fa-duotone fa-solid fa-comment`}></i></p>
                </div>
                <textarea className={styles.textarea} placeholder="..."></textarea>
                <button className={styles.sendButton}>Send <i className="fa-duotone fa-solid fa-paper-plane"></i></button>
                </form>
                

            <div className={styles.commentContainer}>

                <div className={styles.comment}>
                    <div className={styles.commentAuthorDisplay}>
                    <Image className={styles.commentAuthorThumbnail} src="/images/profile-thumbnail.webp" width={75} height={75}></Image>
                    <div className={styles.commentAuthorNameWrapper}>
                        <p className={styles.commentAuthorName}><strong>Benjamin Moeyersoons</strong> <span className={styles.commentTime}>2 hr ago <i className={`${styles.icon} fa-duotone fa-solid fa-comment`}></i></span></p>
                        </div>
                    </div>
                        <p className={styles.commentText}>Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo </p>
                        <span className={styles.readMore}>Read more ...</span>
                </div>

                <div className={styles.comment}>
                    <div className={styles.commentAuthorDisplay}>
                    <Image className={styles.commentAuthorThumbnail} src="/images/profile-thumbnail.webp" width={75} height={75}></Image>
                    <div className={styles.commentAuthorNameWrapper}>
                        <p className={styles.commentAuthorName}><strong>Benjamin Moeyersoons</strong> <span className={styles.commentTime}>2 hr ago <i className={`${styles.icon} fa-duotone fa-solid fa-comment`}></i></span></p>
                        </div>
                    </div>
                        <p className={styles.commentText}>Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo </p>
                        <span className={styles.readMore}>Read more ...</span>
                </div>

                <div className={styles.comment}>
                    <div className={styles.commentAuthorDisplay}>
                    <Image className={styles.commentAuthorThumbnail} src="/images/profile-thumbnail.webp" width={75} height={75}></Image>
                    <div className={styles.commentAuthorNameWrapper}>
                        <p className={styles.commentAuthorName}><strong>Benjamin Moeyersoons</strong> <span className={styles.commentTime}>2 hr ago <i className={`${styles.icon} fa-duotone fa-solid fa-comment`}></i></span></p>
                        </div>
                    </div>
                        <p className={styles.commentText}>Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo Homo </p>
                        <span className={styles.readMore}>Read more ...</span>
                </div>
            </div>
            <button className={styles.loadMoreButton}>Load More <i className="fa-duotone fa-solid fa-comments"></i></button>
        </section>
        </>
    )
}