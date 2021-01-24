import React from 'react';
import DataList from './DataList/DataList';
import NotFound from '../NotFound/NotFound';
import styles from './dataSection.module.css';

export default function DataSection(props) {
  return(
    <div className={styles.container}>
      {props.notFound ? <NotFound responseStatus={props.responseStatus}/> : <DataList selectedItem={props.selectedItem}/>}
    </div>
  )
}