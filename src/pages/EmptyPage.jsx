import React from 'react';

import styles from '../styles/pages/EmptyPage.module.css';

import image from '../assets/emptyImage.svg';

const EmptyPage = () => {
  return (
    <div className={styles.container}>
        <img src={image} alt="Empty Icon"/>
        <strong>There is still nothing here</strong>
        <p>Add some repositories by clicking add new repository</p>
      </div>
  );
}

export default EmptyPage;
