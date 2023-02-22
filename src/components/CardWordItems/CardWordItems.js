import { useSelector } from 'react-redux';
import CardItem from './CardItem';
import styles from './CardWordItems.module.css';

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
    </div>
  );
};

export default CardWordItems;
