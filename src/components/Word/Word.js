import React, { useState } from 'react';
import styles from './Word.module.css';
import { arrayShuffle } from './helpers';
import { useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import MouseOverPopover from '../UI/MouseOverPopover';

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

  const revealAnswerHandler = () => {
    setIsAnswerVisible(true);
  };

  let wordClasses = styles.word_main;
  if (isAnswerVisible) {
    wordClasses = `${styles.word_main} ${styles.word_show_answer}`;
  }
  return (
    <div className={styles.container}>
      <MouseOverPopover>
        <div className={styles.word_wrapper}>
          <div className={styles.wrapper} onClick={revealAnswerHandler}>
            <p className={wordClasses}>{wordArray[deckCounter]?.russian}</p>
            {isAnswerVisible && (
              <p className={`${styles.word_main} ${styles.word_answer} `}>
                {wordArray[deckCounter]?.english}
              </p>
            )}
          </div>
        </div>
      </MouseOverPopover>
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
