import React from 'react';
import styles from './listItem.module.css';

export default function ListItem(props) {
  return(
    <li className={styles.item}>

      <input type="radio" id={props.item.name} 
             name='item' 
             className={styles.radio}/>

      <label htmlFor={props.item.name} 
             className={styles.label} 
             onClick={ () => {props.selectItem(props.item)}}>

          {props.item.name}
          
      </label>
    </li>
  )
}