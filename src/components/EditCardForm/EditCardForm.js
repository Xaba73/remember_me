import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editWord } from '../../store/deckControlSlice';
import InputForForm from '../InputForForm/InputForForm';
import styles from './EditCardForm.module.css';
import { validationSchema } from '../Word/helpers';
import Divider from '@mui/material/Divider';
import ButtonsForForms from '../ButtonsForForms/ButtonsForForms';
const EditCardForm = (props) => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      russian: props.russian,
      english: props.english,
      id: props.id,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const payload = {
        id: props.id,
        russian: values.russian,
        english: values.english,
      };
      dispatch(editWord(payload));
      props.isShowModal(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form__wrapper}>
      <h2 className={styles.form_title}>Редактирование карточки</h2>
      <Divider variant='fullWidth' sx={{ marginBottom: '0.5em' }} />
      <InputForForm
        name='russian'
        value={formik.values.russian}
        onChange={formik.handleChange}
        labelDescription='Русский'
        error={formik.touched.russian && Boolean(formik.errors.russian)}
        helperText={formik.touched.russian && formik.errors.russian}
      />
      <InputForForm
        name='english'
        value={formik.values.english}
        onChange={formik.handleChange}
        labelDescription='Английский'
        error={formik.touched.english && Boolean(formik.errors.english)}
        helperText={formik.touched.english && formik.errors.english}
      />
      <ButtonsForForms
        submitButtonText='Сохранить'
        closeModal={props.closeModal}
      />
    </form>
  );
};

export default EditCardForm;
