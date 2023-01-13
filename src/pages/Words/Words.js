import Word from '../../components/Word/Word';
import React from 'react';
import styles from './Words.module.css';

const Words = () => {
  return (
    <div className={styles.decorationWrapper}>
      <Word />
    </div>
  );
};

export default Words;
