import ModeToggle from '@/app/components/ModeToggle/ModeToggle';
import NotificationsForm from '../components/NotificationsForm/NotificationsForm';
import ExportData from '../components/ExportData/ExportData';
import DeleteAccount from '../components/DeleteAccount/DeleteAccount';
import Logout from '../components/Logout/Logout';
import NewsLetterSignUp from '../components/NewsLetterSignUp/NewsLetterSignUp';
import Link from 'next/link';

export default function AccountSettings() {
    return (
        <div className="page-container">
            <section>
                <h1>Account settings <i className="fa-duotone fa-solid fa-gear"></i></h1>
                <p><strong>Welcome Björn van der Lugt !</strong></p>
                <p>Personalise your experience and manage your sensitive info.</p>
                </section>
            <section>
                <h2>User Preferences</h2>
                <ModeToggle/>
                <NotificationsForm/>
                <NewsLetterSignUp/>
            </section>
            <section>
                <h2>User Data</h2>
                <p>This is what I do with <Link href="/privacy-policy">your data</Link> </p>
                <ExportData/>
                <DeleteAccount/>
                <Logout/>
            </section> 
        </div>
    )
}