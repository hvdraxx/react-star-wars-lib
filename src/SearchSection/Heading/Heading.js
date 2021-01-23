import React from 'react';
import styles from './heading.module.css';

export default function Heading() {
  return(
    <div className={styles.container}>
      <h1 className={styles.star}>
        star
      </h1>

      <h2 className={styles.library}>
        library
      </h2>

      <h1 className={styles.wars}>
        wars
      </h1>
    </div>
  )
}