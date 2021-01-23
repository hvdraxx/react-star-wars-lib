import React from 'react';
import styles from './modal.module.css';

export default function Modal(props) {
  return(
    <div className={styles.overlay}>

      <div className={styles.container}>
        <p className={styles.text}>
          input field should not be empty!
        </p>
        <button className={styles.button} onClick={props.triggerModal}>
          close
        </button>
      </div>

    </div>
  )
}