import React from 'react';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { newWord } from '../../store/deckControlSlice';
import { v4 as uuidv4 } from 'uuid';
import InputForForm from '../InputForForm/InputForForm';
import { validationSchema } from '../Word/helpers';
import styles from './NewCardForm.module.css';
import Divider from '@mui/material/Divider';
import ButtonsForForms from '../ButtonsForForms/ButtonsForForms';

const NewCardForm = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      russian: '',
      english: '',
    },
    validationSchema: validationSchema,
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
    <form onSubmit={formik.handleSubmit} className={styles.form__wrapper}>
      <h2 className={styles.form_title}>Добавить карточку</h2>
      <Divider variant='fullWidth' sx={{ marginBottom: '0.5em' }} />
      <InputForForm
        name='russian'
        value={formik.values.russian}
        onChange={formik.handleChange}
        placeholder='Кошка'
        labelDescription='Здесь напишите новое слово на русском'
        error={formik.touched.russian && Boolean(formik.errors.russian)}
        helperText={formik.touched.russian && formik.errors.russian}
      />
      <InputForForm
        name='english'
        value={formik.values.english}
        onChange={formik.handleChange}
        placeholder='Cat'
        labelDescription='А здесь его перевод на английском'
        error={formik.touched.english && Boolean(formik.errors.english)}
        helperText={formik.touched.english && formik.errors.english}
      />
      <ButtonsForForms
        submitButtonText='Добавить'
        closeModal={props.closeModal}
      />
    </form>
  );
};

export default NewCardForm;
