import styles from "./LoadMoreButton.module.scss";

export default function LoadMoreButton () {
    return(
        <button className={styles.button}>Load More <i className={`${styles.brain} fa-duotone fa-solid fa-brain`}></i></button>
    )
}