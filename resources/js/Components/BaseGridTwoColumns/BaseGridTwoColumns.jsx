import styles from "@/Components/BaseGridTwoColumns/BaseGridTwoColumns.module.css";
import {FaHome, FaHotel, FaPenFancy, FaUsers} from "react-icons/all";
import NavLink from "@/Components/NavLink";
import {Link} from "@inertiajs/react";

export default function BaseGridTwoColumns({ user, children }) {
    return (
        <section className={styles.conteudoPrincial}>
            <section className={styles.menuLateral}>
                <Link
                    className={`${styles.btn} ${styles.btnIcon} ${route().current('dashboard') ? styles.btnActive : ''}`}
                    href={route('dashboard')}
                >{<FaHome />} Dashboard</Link>
                <Link
                    className={`${styles.btn} ${styles.btnIcon} ${route().current('hospitality.places') ? styles.btnActive : ''}`}
                    href={route('hospitality.places')}
                >{<FaHotel />} Hotéis</Link>
                <NavLink className={`${styles.btn} ${styles.btnIcon}`} href="#">{<FaUsers />} Hóspedes</NavLink>
                <NavLink className={`${styles.btn} ${styles.btnIcon}`} href="#">{<FaPenFancy/>} Conteúdo</NavLink>
            </section>
            <main className={styles.conteudo}>{children}</main>
        </section>
    );
}
