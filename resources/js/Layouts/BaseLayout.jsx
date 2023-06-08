import styles from './BaseLayout.module.css';
import {Link} from "@inertiajs/react";
import {SiHotelsdotcom} from "react-icons/all";

export default function BaseLayout({children, auth}) {
    return (
        <>
            <header className={styles.mainHeader + ' bg-white shadow-md'}>
                <div className={styles.logo}>
                    <Link href={route('welcome')}><SiHotelsdotcom style={{fontSize: "1.3em", color: '#7C25FF' }} /></Link>
                </div>
                <div className={styles.painel}>
                    {auth.user && <p>Olá, {auth.user.name}</p>}
                    <Link className={styles.btnPainel} href={route('login')}>{auth.user ? 'Painel' : 'Login'}</Link>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
}


