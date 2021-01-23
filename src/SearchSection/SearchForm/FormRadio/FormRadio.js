import React from 'react';
import styles from './formRadio.module.css';
import RadioButton from './RadioButton/RadioButton';

export default function FormRadio() {
  return(
    <div className={styles.container}>
      <RadioButton value='people' checked/>
      <RadioButton value='planets' />
      <RadioButton value='starships'/>
    </div>
  )
}