import { useDispatch } from 'react-redux';
import styles from './CardItem.module.css';
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
      <p className={styles.original}>{props.russian}</p>
      <p className={styles.translation}>{props.english}</p>
      <IconButton color='primary' aria-label='delete' onClick={onEditHandler}>
        <ModeEditIcon />
      </IconButton>
      <IconButton color='primary' aria-label='delete' onClick={onDeleteHandler}>
        <DeleteIcon />
      </IconButton>
    </form>
  );
};

export default CardItem;
