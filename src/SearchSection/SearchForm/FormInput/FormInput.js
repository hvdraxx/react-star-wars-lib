import React from 'react';
import styles from './formInput.module.css';

export default function FormInput(props) {
  return(
    <div className={styles.container}>
      <input
      type="text"
      placeholder="e. g. Skywalker"
      className={styles.input}
      id="inputSearch"
      autoComplete="off"
      onChange={props.handleValue}
      />
    </div>
  )
}