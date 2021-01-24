import React from 'react';
import styles from './notFound.module.css';
import NotFoundSVG from './NotFoundSVG/NotFoundSVG';

export default function NotFound(props) {
  const error = <div className={styles.errorWrapper}>
                  <p className={styles.wrong}>Something went wrong</p>
                  <p className={styles.again}>Try again.</p>
                </div>

  const notFound = <div className={styles.notFoundWrapper}>
                     <p className={styles.notFound}>
                       nothing found
                     </p>
                     <NotFoundSVG />
                   </div>

  return(
    <div className={styles.container}>
      {props.responseStatus === 200 ? notFound : error} 
    </div>
  )
}