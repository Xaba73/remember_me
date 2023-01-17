import { Link } from 'react-router-dom';
import AddCardWordItemForm from '../../components/AddCardWordItemForm/AddCardWordItemForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';

const EditingDeck = () => {
  return (
    <>
      <Link to='/words'>Карточки</Link>
      <CardWordItems />
      <AddCardWordItemForm />
    </>
  );
};

export default EditingDeck;
