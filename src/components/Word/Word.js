import React, { useEffect, useState } from 'react';
import styles from './Word.module.css';
import { arrayShuffle } from './helpers';

const DUMMY_WORD = [
  { russian: 'лошадь', english: 'horse' },
  { russian: 'машина', english: 'car' },
  { russian: 'красный', english: 'red' },
  { russian: 'медведь', english: 'bear' },
  { russian: 'Явно', english: 'explicitly' },
  { russian: 'Оказывается', english: 'it turns out' },
  { russian: 'уязвимый', english: 'vulnerable' },
  { russian: 'Хотя, однако', english: 'though' },
  { russian: 'Довольно, вполне', english: 'quite' },
];

const Word = () => {
  let firstShuffeledArray = arrayShuffle(DUMMY_WORD);

  const [wordArray, setWordArray] = useState(firstShuffeledArray);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);
  const [deckCounter, setDeckCounter] = useState(0);

  const nextWordHandler = () => {
    console.log(wordArray);
    if (deckCounter === wordArray.length - 1) {
      setWordArray(arrayShuffle(DUMMY_WORD));
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

  return (
    <div className={styles.container}>
      <header></header>
      <div className={styles.wrapper}>
        <p className={styles.word_main}>{wordArray[deckCounter].russian}</p>
        {isAnswerVisible && (
          <p className={styles.word_main}>{wordArray[deckCounter].english}</p>
        )}
      </div>
      {wordButton}
    </div>
  );
};

export default Word;
