import Link from "next/link";
import ContactForm from '@/app/components/ContactForm/ContactForm';

export default function() {
    return (
        <div className="page-container">
            <h1>Contact</h1>
            <p>
            If you'd like to chat, discuss business, or report something, 
            feel free to contact me using the details below. 
            Your message will be sent directly to my email, and I'll use it to respond to you.
            </p>
            <ContactForm/>
            <p>
            You can also reach out to me on my social media platforms.
            </p>
            <ul>
            <li>
                <Link 
                    href="https://github.com/Bjorn-van-der-Lugt"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-square-github"></i> Github
                </Link>
            </li>
            <li>
                <Link 
                    href="https://www.linkedin.com/in/björn-van-der-lugt-136b7731a"
                    target="_blank"
                    rel="noopener noreferrer"> <i className="fa-brands fa-linkedin"></i> LinkedIn
                </Link>
            </li>
            <li>
                <Link 
                    href="https://x.com/BjornVdLugt"
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fa-brands fa-square-x-twitter"></i> .com
                </Link>
            </li>   
            </ul>
        <p>
            For more information about me and the work I do, 
            you can also visit my developer <Link href="/" target="_blank" rel="noopener noreferrer">portfolio. </Link> It’s a great place to explore my projects, skills, and professional background.
        </p>
        </div>
    )
}