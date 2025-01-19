import Link from 'next/link';
import RecentPopular from './components/RecentPopular/RecentPopular.js';

export default function Home() {
  return (
    <div className="page-container">
      <section>
      <h1>Welcome</h1>
      <p>It’s good to have you here. If you want to learn more about it, 
         head over to the <Link href='/about'>about</Link> page. Please also read the <Link href='/tos' > ToS</Link> and my <Link href='/privacy-policy'>privacy policy</Link>. 
         </p>
      </section>
      <section>
        <h2>News</h2>
        <p>
        If you’re reading this, it means you’re experiencing the MVP version of the blog. 
        This blog will grow and evolve as more people interact with it, gaining new features 
        along the way. So, stay tuned—there’s more to come!
        </p>
        </section>
     <RecentPopular/>
    </div>
  );
}
