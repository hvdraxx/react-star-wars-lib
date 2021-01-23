import React from 'react';
import styles from './dataList.module.css';
import DataListItem from './DataListItem/DataListItem';

export default function DataList(props) {
  const item = props.selectedItem;

  const configureItem = () => {
    // throw and rename specific keys
    // eslint-disable-next-line array-callback-return
    Object.entries(item).map(([key, value]) => {
      if (value === '') return delete item[key];
      if (key === 'url' || key ===  'created' || key ===  'edited' || key ===  'homeworld') return delete item[key];
      if (Array.isArray(value)) return delete item[key];
      
      if (key.includes('_')) {
        Object.defineProperty(item, key.replace('_', ' '),
            Object.getOwnPropertyDescriptor(item, key));
        delete item[key];
      }
    })
  }

  configureItem();

  const values = Object.entries(item).map(([key, value]) => {
    return (
      <DataListItem key={key} property={key} value={value} />
    );
  });

  return(
      <ul className={styles.list}>
        {values}
      </ul>
  )
}