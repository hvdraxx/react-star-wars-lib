import React from 'react';
import styles from './notFound.module.css';
import NotFoundSVG from './NotFoundSVG/NotFoundSVG';

export default function NotFound() {
  return(
    <div className={styles.container}>
      <p className={styles.text}>
        nothing found
      </p>
      <NotFoundSVG />
    </div>
  )
}