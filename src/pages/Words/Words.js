import Word from '../../components/Word/Word';
import React from 'react';
import styles from './Words.module.css';
import { Link } from 'react-router-dom';

const Words = () => {
  return (
    <div className={styles.decorationWrapper}>
      <Link to='/editing'>Редактировать</Link>
      <Link to='/'> Home</Link>
      <Word />
    </div>
  );
};

export default Words;
