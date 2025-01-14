import Image from 'next/image';
import Link from 'next/link';
import Popular from '../components/Popular/Popular';
import Recent from '../components/Recent/Recent';

export default function Soul() {
    return (
    <div className="page-container">
        <section>
            <h1>Soul <i className="fa-sharp-duotone fa-solid fa-eye"></i></h1>
            <p>
                In this section, we’ll dive into what my cousin once tastefully described as 
                the “sciences of the mind.” We’ll explore topics such as religion, mythology, 
                psychology, philosophy, folklore, and spirituality. Along the way, we’ll likely 
                branch out into related fields like history and evolutionary biology as well.
            </p>
            <Image src="/images/art/the-soul-of-the-rose-john-william-waterhouse-1903.webp" width={0.65} height={1} 
            alt="A painting of a woman with red hair wearing an ornate blue robe, 
            gently smelling a rose in a lush garden, surrounded by soft, 
            warm colors and intricate floral details."  
            priority 
            layout='responsive'
            />
                <figcaption>
                The Soul of the Rose" by John William Waterhouse, 
                1903. A timeless Symbolist masterpiece depicting a woman immersed in the scent of roses, 
                embodying themes of beauty, introspection, and the connection between nature and the soul.
                </figcaption>
            </section>
            <section>
               <Recent/>
            </section>
            <section>
                <Popular/>
            </section>
    </div>
    )
}