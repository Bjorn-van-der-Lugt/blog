import Image from 'next/image';
import RecentPopular from '../components/RecentPopular/RecentPopular.js';
import ResponsiveImageClient from '../components/ResponsiveImageClient/ResponsiveImageClient.js';

export default function Life() {
    return (
        <div className="page-container">
            <section>
            <h1>Life <i className={`fa-duotone fa-solid fa-masks-theater`}></i></h1>
            <p>In this section, you'll find posts exploring all aspects 
                of life as a man, including parenting, dating, career 
                perspectives, grooming, managing resources, relationships 
                and family dynamics. You'll also discover guidance on finding 
                your place in society and navigating life's many roles, 
                with new topics added regularly.
             </p>
             <ResponsiveImageClient
              src="/images/art/I-am-half-sick-of-shadows-said-the-lady-of-shalot-john-william-waterhouse-1880.webp"
              alt="A painting by John William Waterhouse titled 'I am half-sick of shadows, said the lady of Shalott.' 
              It depicts a woman in a red dress sitting in a richly decorated interior with a loom in front of her. 
              She gazes longingly out of a rounded window overlooking a medieval bridge and castle."
              priority={true}
              aspectRatio="0.73"
             />
                <figcaption>
                John William Waterhouse, 
                I Am Half-Sick of Shadows, Said the Lady of Shalott, 1915. 
                A Pre-Raphaelite interpretation of the Lady of Shalott, depicting 
                her moment of longing and reflection as she weaves her fate-bound tapestry.
                </figcaption>
                </section>
                <RecentPopular/>
        </div>
    )
}