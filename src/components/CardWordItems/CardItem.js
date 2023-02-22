import styles from './CardItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteCard } from '../../store/deckControlSlice';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
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
  };
  return (
    <form className={styles.container}>
      <div className={styles.card_word_wrapper}>
        <div className={styles.word_russian}>{props.russian}</div>
        <div className={styles.word_english}>{props.english}</div>
      </div>
      <div className={styles.card_word_button_wrapper}>
        <IconButton
          color='black'
          aria-label='edit card'
          onClick={onEditHandler}
        >
          <ModeEditIcon />
        </IconButton>
        <IconButton color='black' aria-label='delete' onClick={onDeleteHandler}>
          <DeleteIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default CardItem;
