import Word from '../../components/Word/Word';
import React, { useState } from 'react';
import styles from './Words.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Words = () => {
  const words = useSelector((state) => state.deckControl.basicWords);
  console.log(words);
  let pageContent;
  if (words.length === 0) {
    pageContent = <p>Ошибка!</p>;
  } else {
    pageContent = (
      <div className={styles.decorationWrapper}>
        <Link to='/editing'>Редактировать</Link>
        <Link to='/'> Home</Link>
        <Word />
      </div>
    );
  }
  return <React.Fragment>{pageContent}</React.Fragment>;
};

export default Words;
