import Link from 'next/link';
import Popular from './components/Popular/Popular';
import Recent from './components/Recent/Recent';

export default function Home() {
  return (
    <div className="page-container">
      <section>
      <h1>Welcome</h1>
      <p>It’s good to have you here. If you want to learn more about it, head over to the <Link href='/about'>About</Link> page. If not, you can probably find some stuff to your liking below.</p>
      </section>
      <section>
        <h2>News</h2>
        <p>
        If you’re reading this, it means you’re experiencing the MVP version of the blog. 
        This blog will grow and evolve as more people interact with it, gaining new features 
        along the way. So, stay tuned—there’s more to come!
        </p>
        </section>
      <section><Recent/></section>
      <section><Popular/></section>
    </div>
  );
}
