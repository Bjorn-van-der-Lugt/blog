import { Lora, Roboto } from 'next/font/google';
import './globals.scss';
import MenuToggle from '@/app/components/MenuToggle/MenuToggle';
import Script from 'next/script';
import Link from 'next/link';
import ArrowBackUp from './components/ArrowBackUp/ArrowBackUp';
import Search from './components/Search/Search';

const lora = Lora({ weight: ['400', '700'], subsets: ['latin'] });
const roboto = Roboto({ weight: ['400', '700'], subsets: ['latin'] });

export const metadata = {
  title: "Björn van der Lugt",
  description: 'An example description',
};

function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${lora.className} ${roboto.className}`}>
        <MenuToggle/>
        <Script src="https://kit.fontawesome.com/e4ca2860c2.js"  strategy="afterInteractive"
          crossOrigin="anonymous"/>
        <main>{children}</main>
        {/*
        <footer>
          <nav>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/life">Life</Link></li>
              <li><Link href="/soul">Soul</Link></li>
              <li><Link href="/fitness">Fitness</Link></li>
              <li><Link href="/coding">coding</Link></li>
              <li><Link href="/art">Art</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/">Contact</Link></li>
              <li><Link href="/">Search</Link></li>
              <li><Link href="/">Account Settings</Link></li>
              <li><Link href="/">Donate</Link></li>
            </ul>
          </nav>
        </footer>
        */}
        <Search/>
        <ArrowBackUp/>
      </body>
    </html>
  );
}

export default RootLayout;
