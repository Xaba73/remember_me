import { useSelector } from 'react-redux';
import CardItem from './CardItem';

const CardWordItems = (props) => {
  const words = useSelector((state) => state.deckControl.basicWords);
  console.log(words);
  return (
    <div>
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
