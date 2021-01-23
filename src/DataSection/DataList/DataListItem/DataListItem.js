import React from 'react';
import styles from './dataListItem.module.css';

export default function DataListItem(props) {
  return(
    <li className={styles.item}>
      <span className={styles.property}>{props.property}</span>: <span className={styles.value}>{props.value}</span>
    </li>
  )
}