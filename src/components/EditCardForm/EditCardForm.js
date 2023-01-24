import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editWord } from '../../store/deckControlSlice';
import InputForForm from '../InputForForm/InputForForm';

const EditCardForm = (props) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      russian: props.russian,
      english: props.english,
      id: props.id,
    },
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
    <form onSubmit={formik.handleSubmit}>
      <InputForForm
        name='russian'
        value={formik.values.russian}
        onChange={formik.handleChange}
        labelDescription='Исправь свою карточку'
      />
      <InputForForm
        name='english'
        value={formik.values.english}
        onChange={formik.handleChange}
        labelDescription='И её перевод'
      />
      <button type='submit'>Исправить </button>
    </form>
  );
};

export default EditCardForm;
