import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';
import Modal from '../../components/Modal/Modal';
const EditingDeck = () => {
  const [modalActive, setModalActive] = useState(true);
  return (
    <>
      <Link to='/words'>Карточки</Link>
      <CardWordItems />
      <NewCardForm />
      <Modal active={modalActive} setActive={setModalActive}></Modal>
    </>
  );
};

export default EditingDeck;
