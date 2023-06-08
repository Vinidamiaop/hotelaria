import { Link, Head } from '@inertiajs/react';
import BaseLayout from "@/Layouts/BaseLayout";
import styles from './Welcome.module.css';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <BaseLayout auth={auth}>
            <Head title="Hotelaria" />
            <div className={styles.main}>
                <h1 className="font-semibold">Here comes the content</h1>
                <p>E aqui vem o texto</p>
            </div>
        </BaseLayout>
    );
}
