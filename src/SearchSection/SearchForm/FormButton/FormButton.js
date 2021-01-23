import React from 'react';
import styles from './formButton.module.css';

export default function FormButton() {
  return(
    <div className={styles.container}>
      <button type='submit' className={styles.button}>
        Find
      </button>
    </div>
  )
}