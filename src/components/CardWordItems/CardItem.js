import { useDispatch } from 'react-redux';
import styles from './CardItem.module.css';
import { deleteCard } from '../../store/deckControlSlice';
const CardItem = (props) => {
  const dispatch = useDispatch();
  let card = {
    russian: props.russian,
    english: props.english,
    id: props.id,
  };
  const onEditHandler = (event) => {
    event.preventDefault();
    props.onIsEditingCardActive(true);
    props.onGetDateForEditionModal(card);
  };
  const onDeleteHandler = (event) => {
    event.preventDefault();
    dispatch(deleteCard(card));
    console.log('Ура!');
  };
  return (
    <form className={styles.container}>
      <p className={styles.original}>{props.russian}</p>
      <p className={styles.translation}>{props.english}</p>
      <button onClick={onEditHandler}>Edit</button>
      <button onClick={onDeleteHandler}> Delete </button>
    </form>
  );
};

export default CardItem;
