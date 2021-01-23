import React from 'react';
import styles from './searchSection.module.css';
import Heading from './Heading/Heading';
import SearchForm from './SearchForm/SearchForm';

export default function SearchSection(props) {
  return(
    <div className={styles.container}>
    <Heading />
    <SearchForm getResponse={props.getResponse} 
                triggerModal={props.triggerModal}
                changeNotFound={props.changeNotFound}/>
  </div>
  )
}