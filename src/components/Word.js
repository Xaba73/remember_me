import React, { useState } from 'react';
import styles from './Word.module.css';
const DUMMY_WORD = [
  { russian: 'лошадь', english: 'horse' },
  { russian: 'машина', english: 'car' },
  { russian: 'красный', english: 'red' },
  { russian: 'медведь', english: 'bear' },
];

function arrayShuffle(array) {
  if (!Array.isArray(array)) {
    throw new TypeError(`Expected an array, got ${typeof array}`);
  }

  array = [...array];

  for (let index = array.length - 1; index > 0; index--) {
    const newIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[newIndex]] = [array[newIndex], array[index]];
  }
  console.log(array);
  return array;
}

const Word = () => {
  const [wordArray, setWordArray] = useState(DUMMY_WORD);

  const shuffleWordHandler = () => {
    setWordArray(arrayShuffle(DUMMY_WORD));
  };

  return (
    <div className={styles.container}>
      <header></header>
      <div className={styles.wrapper}>
        <p className={styles.word_main}>{wordArray[0].russian}</p>
        <p className={styles.word_main}>{wordArray[0].english}</p>
      </div>
      <button onClick={shuffleWordHandler}>Next</button>
    </div>
  );
};

export default Word;
