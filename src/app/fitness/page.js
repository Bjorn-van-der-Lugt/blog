import ResponsiveImageClient from '../components/ResponsiveImageClient/ResponsiveImageClient.js';
import Recentopular from '../components/RecentPopular/RecentPopular.js';

export default function Fitness() {
    return (
    <div className="page-container">
        <section>
            <h1>Fitness <i className="fa-duotone fa-wreath-laurel"></i></h1>
            <p>In this section, we’ll cover physical fitness: how to start from zero, the dos and don’ts, the why, the how, and separating myths from truths.</p>
            <ResponsiveImageClient
                src="/images/art/heracles-and-the-nemea-lion-pieter-paul-rubens-1615.webp"
                alt="Heracles wrestling the lion"
                aspectRatio="1.66"
                priority={true}
            />
             <figcaption>
             Heracles wrestling the Nemean Lion, a timeless depiction of strength, determination, 
             and overcoming seemingly insurmountable challenges. Painting by Peter Paul Rubens, 1615.
             </figcaption>
        </section>
        <Recentopular/>
    </div>
    )
}