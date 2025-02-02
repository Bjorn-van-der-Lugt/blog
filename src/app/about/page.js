import Image from 'next/image';
import Link from 'next/link';
import ResponsiveImage from '../components/ResponsiveImage/ResponsiveImage';

export default function() {
    return (
        <div className={`page-container`}>
            <section>
            <h1>Welcome</h1>
            <p>It’s good to have you here. Over the last 30 years, 
                I’ve gained a few skills that, at first glance, 
                don’t seem easily reconcilable. This blog serves as a way to bring some cohesion to those skills, 
                explore potential avenues for monetization, and create opportunities for learning.
            </p>
            <ResponsiveImage
                src="/images/art/the-apparition-gustave-moreau-1876.webp"
                alt="An image of Gustave Moreau's 'The Apparition'"
                priority={true}
                aspectRatio="0.68"
            />
            <figcaption>
                Gustave Moreau, *The Apparition*, 1876. A Symbolist depiction of Salome's vision of John the Baptist’s severed head.
            </figcaption>
            <p>
                I’d like to get this out of the way immediately: although we’ll 
                cover some of the same topics often found elsewhere—and I’ll be re-
                examining certain perspectives—this is not your typical manosphere 
                self-improvement platform. I’m not here to tell you how things are, 
                especially since I’m often confronted with my own stupidity and will 
                probably continue to be. Instead, I’m here to share my perspective on 
                things and would like to encourage the reader to always be critical 
                and find the answers from within. I’ll be covering a broad range 
                of topics. While some will deal with the superficial, I’ll also 
                attempt to explore a holistic approach to “spirituality.” 
                Let’s be clear, though: this won’t involve contemporary new-age 
                mumbo jumbo or self-improvement bogus. I hope your time here proves fruitful.
            </p>
            <p>
            To learn how your data is collected and used on this site, please review my <Link href="/privacy-policy">privacy policy</Link>, please also read the <Link href="/tos">ToS</Link>.
            </p>
            </section>
        </div>
    );
}