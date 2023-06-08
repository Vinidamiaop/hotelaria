import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, router} from "@inertiajs/react";
import styles from './Create.module.css';
import {useState} from "react";

export default function Create({ auth }) {
    const [values, setValues] = useState({
        name: '',
        address: '',
        city: '',
        state: '',
        country: '',
        image: '',
    });
    function handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        Object.keys(values).forEach(key => {
            formData.append(key, values[key]);
        });
        console.log(formData);
        router.post(route('hospitality.places.store'), formData);
    }

    function handleChange(e) {
        const key = e.target.id;
        if(e.target.type === 'file') {
            const file = e.target.files[0];
            setValues(values => ({
                ...values,
                [key]: file,
            }))
            return;
        }

        const value = e.target.value
        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Create" />

            <form onSubmit={handleSubmit} className={styles.placeForm}>
                <div className={styles.formRow}>
                    <div className={styles.formItem}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" value={values.name} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="address">Address</label>
                        <input type="text" name="address" id="address" value={values.address} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="city">City</label>
                        <input type="text" name="city" id="city" value={values.city} onChange={handleChange} />
                    </div>
                </div>
                <div className={styles.formRow}>
                    <div className={styles.formItem}>
                        <label htmlFor="state">State</label>
                        <input type="text" name="state" id="state" value={values.state} onChange={handleChange} />
                    </div>
                    <div className={styles.formItem}>
                        <label htmlFor="country">Country</label>
                        <input type="text" name="country" id="country" value={values.country} onChange={handleChange} />
                    </div>
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formItem}>
                        <label htmlFor="image">Image</label>
                        <input type="file" name="image" id="image"  onChange={handleChange}/>
                    </div>
                </div>

                <div className={styles.formRow}>
                    <button type="submit" className={styles.formSubmitButton}>
                        Create
                    </button>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
