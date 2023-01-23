import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { editWord } from '../../store/deckControlSlice';

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
      <label htmlFor='russian'>Исправь свою карточку</label>
      <input
        id='russian'
        name='russian'
        value={formik.values.russian}
        onChange={formik.handleChange}
      />
      <label htmlFor='english'>И её перевод</label>
      <input
        id='english'
        name='english'
        value={formik.values.english}
        onChange={formik.handleChange}
      />
      <button type='submit'>Исправить </button>
    </form>
  );
};

export default EditCardForm;