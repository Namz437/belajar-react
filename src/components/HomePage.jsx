import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/Homepage.module.css'; // Import CSS module

export default function Homepage() {
    return (
        <div className={styles.homepageContainer}>
            <h2>Ceritanya Homepage (Homepage Tugas)</h2>
            <p>Silahkan Login Terlebih Dahulu!</p>
            <Link to="/login">
                <button>Log-In</button>
            </Link>
        </div>
    );
}