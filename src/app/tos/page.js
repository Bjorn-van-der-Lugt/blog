import Link from "next/link";

export default function ToS() {
    return (
        <div className="page-container">
        <article>
  <header>
    <h1>Terms of Service</h1>
    <p><em>Last Updated: 2025-01-16</em></p>
  </header>
  <section>
    <h2>1. Content Ownership</h2>
    <p>
      All content on this blog, including text, images, and other materials, is owned by me, 
      <strong>Björn van der Lugt</strong>. You may not copy, reproduce, distribute, or use any content 
      without my prior written permission, except for personal and non-commercial use.
    </p>
  </section>
  <section>
    <h2>2. Your Responsibilities</h2>
    <p>
      If you create an account or post comments:
    </p>
    <ul>
      <li>
        Please don’t post anything offensive, defamatory, illegal, or anything that violates 
        the rights of others.
      </li>
      <li>
        You are responsible for keeping your account information accurate and secure.
      </li>
    </ul>
    <p>
      I reserve the right to moderate, edit, or remove comments or content that don’t follow 
      these terms.
    </p>
  </section>
  <section>
    <h2>3. Privacy</h2>
    <p>
      Your privacy matters to me. Please check out my 
      <Link href='/privacy-policy'>Privacy Policy</Link> to see how I handle your personal data.
    </p>
  </section>
  <section>
    <h2>4. Liability Disclaimer</h2>
    <p>
      The content on this blog is provided for informational purposes only. I don’t guarantee 
      that the information is always accurate, complete, or reliable. Please use it at your 
      own risk.
    </p>
  </section>
  <section>
    <h2>5. Changes to These Terms</h2>
    <p>
      I may update these Terms of Service at any time. If I make changes, I’ll post them here, 
      and they’ll take effect immediately.
    </p>
  </section>
  <section>
    <h2>6. Contact Me</h2>
    <p>
      If you have any questions about these Terms of Service, feel free to contact me here 
      <Link href='/contact'></Link>
    </p>
  </section>
  <footer>
    <p>
      <strong>By using this website or creating an account, you acknowledge that you’ve read 
      and agree to these Terms of Service.</strong>
    </p>
  </footer>
</article>
</div>
    )
}