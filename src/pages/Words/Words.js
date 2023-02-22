import Word from '../../components/Word/Word';
import React from 'react';
import styles from './Words.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import { buttonAddNewCardWordsPage } from '../../components/UI/muiCss';
import Header from '../../components/Header/Header';

const Words = () => {
  const words = useSelector((state) => state.deckControl.basicWords);
  let pageContent;
  if (words.length === 0) {
    pageContent = (
      <div className={styles.decorationWrapper}>
        <div className={styles.error__wrapper}>
          <p className={styles.error__message}>
            Похоже, вы еще не добавили ни одной карточки в колоду
          </p>
          <Link to='/editing' className={styles.error__link}>
            <Button variant='outlined' sx={buttonAddNewCardWordsPage}>
              Добавить
            </Button>
          </Link>
        </div>
      </div>
    );
  } else {
    pageContent = (
      <div className={styles.decorationWrapper}>
        <Header link='/editing' linkDescription='Редактировать колоду' />
        <div className={styles.content_wrapper}>
          <Word />
        </div>
      </div>
    );
  }
  return <React.Fragment>{pageContent}</React.Fragment>;
};

export default Words;
