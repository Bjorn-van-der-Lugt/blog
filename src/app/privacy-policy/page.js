import Link from 'next/link';

export default function PrivacyPolicy() {
    return (
    <div className="page-container">
    <section>
        <h1>Privacy Policy</h1>
        <p>
            <strong>2024-12-14</strong>
        </p>
        <p>
            I take your privacy seriously. This Privacy Policy explains how I collect, 
            use, and protect your information when you sign in to my blog and use its 
            features. By using this site, you agree to the practices described below.
        </p>
    </section>
    <section>
        <h2>Information I Collect</h2>
        <div>
            <p>When you sign in to my blog using Google or Facebook, I collect the following information:</p>
            <h3>Personal Information</h3>
            <ul>
                <li>Name: Used to personalize your account experience.</li>
                <li>Email Address: Used for account identification, sending notifications, and newsletters.</li>
            </ul>
            <h3>Preferences</h3>
            <ul>
                <li>Theme settings (e.g., Dark/Light mode).</li>
                <li>Notification preferences.</li>
                <li>Newsletter subscription preferences.</li>
            </ul>
            <h3>Interactions</h3>
            <ul>
                <li>Likes and dislikes on blog posts.</li>
                <li>Comments made on blog posts, which are displayed publicly.</li>
            </ul>
            <p>Additionally, I use Google Analytics to gather anonymous data about my audience. This includes:</p>
            <h3>Analytics Data</h3>
            <ul>
                <li>Device information (e.g., browser type, operating system).</li>
                <li>General location (e.g., city or country).</li>
                <li>Website behavior (e.g., page views, session duration).</li>
            </ul>
            <p>
                Google Analytics collects this data in an <strong>anonymized</strong> and <strong>aggregated</strong> form, and no personally 
                identifiable information (PII) is shared with me.
            </p>
        </div>
    </section>
    <section>
        <h2>How I Use Your Information</h2>
        <div>
            <p>I use the collected information for the following purposes:</p>
            <ul>
                <li>To enable you to log in and manage your personalized settings.</li>
                <li>To display your interactions (e.g., likes, dislikes, and comments) on the blog.</li>
                <li>To send notifications and newsletters (if you choose to opt in).</li>
                <li>To improve your user experience on the blog.</li>
                <li>To analyze website traffic and audience trends through anonymous data.</li>
            </ul>
        </div>
    </section>
    <section>
        <h2>Third-Party Services</h2>
        <div>
            <p>I use the following third-party services:</p>
            <ul>
                <li><strong>Google and Facebook Login:</strong> To provide a convenient way for you to sign in.</li>
                <li><strong>Google Analytics:</strong> To understand my audience and website performance through anonymous insights.</li>
            </ul>
        </div>
    </section>
    <section>
        <h2>Your Choices and Rights</h2>
        <div>
            <p>You have the following rights and choices regarding your information:</p>
            <ul>
                <li>Opt-Out of Newsletters: You can unsubscribe from newsletters at any time using the link provided in the email or through the account settings section.</li>
                <li>Disable Notifications: Manage your notification preferences in your account settings.</li>
                <li>Opt-Out of Analytics Tracking: Use tools like the <a href="https://tools.google.com/dlpage/gaoptout/" target="_blank">Google Analytics Opt-Out Browser Add-on</a> to disable tracking.
                </li>
            </ul>
        </div>
    </section>
    <section>
        <h2>Data Protection</h2>
        <p>
            I take reasonable steps to protect your data from unauthorized access, loss, or misuse. 
            However, no method of transmission or storage is completely secure, so please use the site at your own risk.
        </p>
    </section>
    <section>
        <h2>Updates to This Policy</h2>
        <p>
            I may update this Privacy Policy from time to time. Any changes will be posted on this page with the revised effective date.
        </p>
    </section>
    <section>
        <h2>Contact Me</h2>
        <p>
            If you have any questions about this Privacy Policy, please contact me <Link href="/contact">here</Link>.
        </p>
    </section>
</div>
    )
}