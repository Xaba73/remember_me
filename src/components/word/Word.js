import React, { useState } from 'react';
import styles from './Word.module.css';
import { arrayShuffle } from './stuffFunctions';

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
  const [wordArray, setWordArray] = useState(DUMMY_WORD);
  const [isAnswerVisible, setIsAnswerVisible] = useState(false);

  const nextWordHandler = () => {
    setWordArray(arrayShuffle(DUMMY_WORD));
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
        <p className={styles.word_main}>{wordArray[0].russian}</p>
        {isAnswerVisible && (
          <p className={styles.word_main}>{wordArray[0].english}</p>
        )}
      </div>
      {wordButton}
    </div>
  );
};

export default Word;
