import React, { useState } from 'react';
import styles from './Word.module.css';
import { arrayShuffle } from './helpers';
import { useSelector } from 'react-redux';

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

  let wordButton;
  if (isAnswerVisible) {
    wordButton = (
      <button className={styles.button} onClick={nextWordHandler}>
        Next
      </button>
    );
  } else {
    wordButton = (
      <button className={styles.button} onClick={revealAnswerHandler}>
        Reveal answer
      </button>
    );
  }
  let wordClasses = styles.word_main;
  if (isAnswerVisible) {
    wordClasses = `${styles.word_main} ${styles.word_show_answer}`;
  }
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <p className={wordClasses}>{wordArray[deckCounter]?.russian}</p>
        {isAnswerVisible && (
          <p className={`${styles.word_main} ${styles.word_answer} `}>
            {wordArray[deckCounter]?.english}
          </p>
        )}
      </div>
      {wordButton}
    </div>
  );
};

export default Word;
