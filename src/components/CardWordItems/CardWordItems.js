import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import styles from './CardWordItems.module.css';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const CardWordItems = (props) => {
  const words = useSelector((state) => state.deckControl.basicWords);

  return (
    <div className={styles.grid_container}>
      {words.map((word) => (
        <CardItem
          russian={word.russian}
          english={word.english}
          key={word.key}
          onIsEditingCardActive={props.onIsEditingCardActive}
          onGetDateForEditionModal={props.onGetDateForEditionModal}
          id={word.key}
        />
      ))}
      <div
        className={styles.add_new_card_button_container}
        onClick={props.openModalAddNewCard}
      >
        <IconButton
          color='black'
          aria-label='add new card'
          onClick={props.openModalAddNewCard}
          size='large'
          sx={{
            flexBasis: '100%',
            padding: '1em',
            color: 'rgba(0, 32, 51, 0.8)',
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CardWordItems;
