import React, { useState } from 'react';
import styles from './Word.module.css';
import { arrayShuffle } from './helpers';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Word = () => {
  const words = useSelector((state) => state.deckControl.basicWords);
  let firstShuffeledArray = arrayShuffle(words);

  const [wordArray, setWordArray] = useState(firstShuffeledArray);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [deckCounter, setDeckCounter] = useState(0);

  const nextWordHandler = () => {
    if (deckCounter === wordArray.length - 1) {
      setWordArray(arrayShuffle(words));
      setDeckCounter(0);
    } else {
      setDeckCounter((prevCount) => prevCount + 1);
    }
    setIsAnswerVisible(false);
  };

  const prevWordHandler = () => {
    if (deckCounter > 0) {
      setDeckCounter((prevCount) => prevCount - 1);
    }
    setIsAnswerVisible(false);
  };
  const revealAnswerHandler = () => {
    setIsAnswerVisible(true);
  };

  let wordClasses = styles.word_main;
  if (isAnswerVisible) {
    wordClasses = `${styles.word_main} ${styles.word_show_answer}`;
  }
  let prevButtonClass = `${styles.hidde}`;
  if (deckCounter > 0) {
    prevButtonClass = `${styles.button__wrapper}`;
  }
  return (
    <div className={styles.container}>
      <div className={prevButtonClass}>
        <IconButton
          color='black'
          arial-label='prev'
          size='large'
          onClick={prevWordHandler}
        >
          <ArrowBackIosIcon />
        </IconButton>
      </div>
      <div className={styles.wrapper} onClick={revealAnswerHandler}>
        <p className={wordClasses}>{wordArray[deckCounter]?.russian}</p>
        {!isAnswerVisible && deckCounter <= 1 && (
          <p className={styles.word_answer_tooltip}>
            Чтобы показать ответ, кликните на карточку
          </p>
        )}
        {isAnswerVisible && (
          <p className={`${styles.word_main} ${styles.word_answer} `}>
            {wordArray[deckCounter]?.english}
          </p>
        )}
      </div>
      <div className={styles.button__wrapper}>
        <IconButton
          color='black'
          arial-label='next'
          size='large'
          onClick={nextWordHandler}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default Word;
