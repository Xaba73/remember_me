import { useSelector } from 'react-redux';
import CardItem from './CardItem';

const CardWordItems = () => {
  const words = useSelector((state) => state.add.basicWords);
  console.log(words);
  return (
    <>
      {words.map((word) => (
        <CardItem
          russian={word.russian}
          english={word.english}
          key={word.russian}
        />
      ))}
    </>
  );
};

export default CardWordItems;
