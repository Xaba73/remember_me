import { useState } from 'react';
import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';
import Modal from '../../components/Modal/Modal';
import EditCardForm from '../../components/EditCardForm/EditCardForm';
const EditingDeck = () => {
  const [isAddingNewCardActive, setIsAddingNewCardActive] = useState(false);
  const [isEditingCardActive, setIsEditingCardActive] = useState(false);
  const [dateForEditionCard, setDateForEditionCard] = useState('');

  const openNewCardModalHandler = () => {
    setIsAddingNewCardActive(true);
  };

  const getDateForEditionModal = (cardValue) => {
    setDateForEditionCard(cardValue);
    console.log(dateForEditionCard);
  };

  return (
    <>
      <Link to='/words'>Карточки</Link>
      <CardWordItems
        onIsEditingCardActive={setIsEditingCardActive}
        onGetDateForEditionModal={getDateForEditionModal}
      />
      <button onClick={openNewCardModalHandler}> Add new card</button>
      <Modal
        active={isAddingNewCardActive}
        setActive={setIsAddingNewCardActive}
      >
        <NewCardForm />
      </Modal>
      <Modal active={isEditingCardActive} setActive={setIsEditingCardActive}>
        {isEditingCardActive && (
          <EditCardForm
            russian={dateForEditionCard.russian}
            english={dateForEditionCard.english}
            id={dateForEditionCard.id}
          />
        )}
      </Modal>
    </>
  );
};

export default EditingDeck;
