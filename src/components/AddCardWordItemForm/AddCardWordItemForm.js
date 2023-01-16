import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { newWord } from '../../store/newWordSlice';

const AddCardWordItemForm = () => {
  const [translationInputValue, setInputTranslationValue] = useState('');
  const [originalInputValue, setInputOriginalValue] = useState('');
  const dispatch = useDispatch();
  const addNewWordCardHandler = (event) => {
    event.preventDefault();
    let newCard = {
      russian: translationInputValue,
      english: originalInputValue,
    };
    console.log(newCard);
    dispatch(newWord());
    setInputOriginalValue('');
    setInputTranslationValue('');
  };

  const translationInputChangeHandler = (event) => {
    setInputTranslationValue(event.target.value);
  };
  const originalInputChangeHandler = (event) => {
    setInputOriginalValue(event.target.value);
  };

  return (
    <form onSubmit={addNewWordCardHandler}>
      <input
        type='text'
        value={translationInputValue}
        onChange={translationInputChangeHandler}
      />
      <input
        type='text'
        value={originalInputValue}
        onChange={originalInputChangeHandler}
      />
      <button type='submit' />
    </form>
  );
};

export default AddCardWordItemForm;
