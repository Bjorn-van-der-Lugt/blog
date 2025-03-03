import Image from 'next/image';
import RecentPopular from '../components/RecentPopular/RecentPopular.js';
import ResponsiveImageClient from '../components/ResponsiveImageClient/ResponsiveImageClient.js';

export default function Coding() {
    return (
        <div className="page-container">
            <section>
                <h1>Coding <i className="fa-duotone fa-solid fa-square-code"></i></h1>
                <p>In this section, we’ll cover everything I currently know about web development. 
                   As I continue to learn, more content will be added along 
                   the way. For now, the focus will be on smaller topics like HTML, 
                   CSS/SCSS, JavaScript, React, Next.js, and some refinement details 
                   such as favicons, font icons, and more.</p>
                   <ResponsiveImageClient
                   src="/images/stock-photos/coding-introduction-image.webp"
                   alt="An image of a pair of glasses on a desk, in front of 2 monitors with code displayed."
                   priority={true}
                   aspectRatio="1.33"/>
            </section>
          <RecentPopular/>
        </div>
    )
}