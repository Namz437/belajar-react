import React from 'react';
import styles from '../styles/Completed.module.css'; 

function Completed() {
  return (
    <div className={styles.completedContainer}>
      <h2 className="text-3xl font-bold underline">Studi Kasus Selesai 🎉</h2>
      <p>Terima kasih! 😊</p>
    </div>
  );
}

export default Completed;
