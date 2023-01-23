import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { newWord } from '../../store/deckControlSlice';
import { v4 as uuidv4 } from 'uuid';

const NewCardForm = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      russian: '',
      english: '',
    },
    onSubmit: (values) => {
      let newCard = {
        russian: values.russian,
        english: values.english,
        key: uuidv4(),
      };
      dispatch(newWord(newCard));
      props.isShowModal(false);
      formik.resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor='russian'>Здесь напишите новое слово</label>
      <input
        id='russian'
        name='russian'
        value={formik.values.russian}
        onChange={formik.handleChange}
        placeholder='Кошка'
      />
      <label htmlFor='english'>А здесь его перевод</label>
      <input
        id='english'
        name='english'
        value={formik.values.english}
        onChange={formik.handleChange}
        placeholder='Cat'
      />
      <button type='submit'>Добавить </button>
    </form>
  );
};

export default NewCardForm;
