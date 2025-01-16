import Link from "next/link";
import Image from "next/image";
import styles from "./PreviewTile.module.scss";

export default function PreviewTile() {
    return(
        <div className={styles.previewContainer}>
        <Link href="/post" className={styles.preview}>
            <h3>A Jungian Analysis of The Garden of Earthly Delights</h3>
            <div className="metadata">
            <p><strong>Category:</strong> Soul <i className={`${styles.eyeIcon} fa-sharp-duotone fa-solid fa-eye`}></i></p>
            <p><strong>Author:</strong> Björn van der Lugt</p>
            <p><strong>Tags:</strong> Art Analysis | Hieronymus Bosch</p>
            <p><strong>Date:</strong> <time dateTime="2025-01-11">January 11, 2025</time></p>
            </div>
            <p><strong>Read More <i className={`${styles.linkIcon} fa-duotone fa-solid fa-arrow-up-right-from-square`}></i></strong></p>
            <Image src="/images/art/the-garden-of-earthly-delights-hieronymus-bosch-1510.webp" width={4} height={3} 
    alt='A triptych painting titled "The Garden of Earthly Delights" by Hieronymus Bosch, 
    featuring three panels. The left panel shows the Garden of Eden with Adam, Eve, 
    and various animals. The central panel depicts a surreal scene of fantastical creatures 
    and humans engaged in hedonistic activities in a lush, chaotic landscape. The right panel 
    illustrates a dark, nightmarish depiction of Hell with grotesque figures and scenes of punishment.'  
    priority 
    layout='responsive'
    />
    <figcaption>
    The Garden of Earthly Delights" by Hieronymus Bosch, c. 1490–1510. 
    This famous triptych painting explores themes of sin, morality, and the human experience through 
    surreal and intricate imagery. The left panel depicts the Garden of Eden, the central panel portrays 
    a chaotic scene of earthly indulgence, and the right panel shows the torments of Hell.
    </figcaption>
        </Link>
        </div>
    )
}