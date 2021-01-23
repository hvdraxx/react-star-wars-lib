import React from 'react';
import styles from './radioButton.module.css';

export default function RadioButton(props) {
  return(
    <div className={styles.radioGroup}>

      <input type='radio' 
             name='option' 
             id={props.value} 
             className={[styles.radio, 'option-input'].join(' ')}
             defaultChecked={props.checked}/>

      <label htmlFor={props.value} className={styles.label}>
        {props.value}
      </label>

    </div>
  )
}