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
        Please don’t post anything offensive, abusive, defamatory, obscene, hateful, illegal, or anything 
        that violates the rights of others.
      </li>
      <li>
        Spamming, phishing, or distributing malware is strictly prohibited.
      </li>
      <li>
        Attempting to hack, disrupt, or gain unauthorized access to the website or its systems is not allowed.
      </li>
      <li>
        Reverse engineering, scraping, or using automated tools to access content without permission is prohibited.
      </li>
      <li>
        You are responsible for keeping your account information accurate and secure.
      </li>
    </ul>
    <p>
      I reserve the right to moderate, edit, or remove comments or content that don’t follow these terms.
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
      This website and its content are provided "as is" and "as available," without any warranties of any kind, express or implied, 
      including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement.
    </p>
    <p>
      I do not guarantee that the website will be uninterrupted, error-free, secure, or free of harmful components. 
      Any use of the website, reliance on its content, or actions taken based on advice, information, or comments provided 
      is solely at your own risk.
    </p>
    <p>
      To the fullest extent permitted by law, I disclaim all liability for any damages of any kind, including but not limited to 
      direct, indirect, incidental, consequential, punitive, or special damages, arising from or in connection with your use of 
      the website, inability to use the website, or any content, including comments, posted by third parties.
    </p>
  </section>
  <section>
    <h2>5. Changes to These Terms</h2>
    <p>
      I reserve the right to update these Terms of Service at any time. Any changes will be effective immediately upon 
      posting on this page. It is your responsibility to review these Terms periodically for updates. Your continued use 
      of the website constitutes acceptance of the revised Terms.
    </p>
  </section>
  <section>
    <h2>6. Governing Law and Dispute Resolution</h2>
    <p>
      These Terms of Service are governed by the laws of the Netherlands, without regard to its conflict of law principles. 
      Any disputes arising from or related to these Terms of Service shall be resolved exclusively in the courts of the Netherlands. 
      Alternatively, I may require disputes to be resolved through binding arbitration in accordance with Dutch arbitration laws, 
      at my sole discretion.
    </p>
  </section>
  <section>
    <h2>7. User-Generated Content</h2>
    <p>
      By submitting comments, posts, or other content to this website, you grant me a non-exclusive, worldwide, royalty-free, 
      perpetual, and irrevocable license to use, reproduce, modify, adapt, publish, translate, distribute, and display such 
      content in any media. You represent that you have the necessary rights to grant this license and that the content does not 
      violate the rights of any third party. I reserve the right to remove or modify user-generated content at my sole discretion.
    </p>
  </section>
  <section>
    <h2>8. Contact Me</h2>
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
