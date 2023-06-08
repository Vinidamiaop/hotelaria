import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from "@inertiajs/react";
import styles from './Places.module.css';
import {FaEye, FaPlus} from "react-icons/all";

export default function Places({auth, places, laravelVersion, phpVersion}) {
    function handleCardClick() {
        router.get(route('hospitality.places.new'));
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Places"/>
            <section className={styles.container}>
                <div className={styles.hotelCard__novo} onClick={handleCardClick}>
                    <div className={styles.hotelCard__novo__icon}>
                        <FaPlus/>
                    </div>
                </div>
                {places && places.map(place => (
                    <div key={place.id} className={`${styles.hotelCard} ${styles.hotelCard__place}`}>
                        {/*<div className={styles.hotelCard__place}>*/}
                        <div className={styles.hotelCard__place__image}>
                            <img src={place.image}/>
                        </div>
                        <div className={`${styles.hotelCard__place__info} text-gray-600`}>
                            <h3>{place.name}</h3>
                            <p>{place.city}</p>
                        </div>
                        <div className={styles.hotelCard__place__footer}>
                            <button><FaEye/>&nbsp;Visualizar</button>
                        </div>
                        {/*</div>*/}
                    </div>))}
            </section>
        </AuthenticatedLayout>
    );
}
