import React from 'react';
import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';
import Modal from '../../components/Modal/Modal';
import EditCardForm from '../../components/EditCardForm/EditCardForm';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../../store/uiSlice';
import Notification from '../../components/UI/Notification';
let isInitial = true;
const EditingDeck = () => {
  const [isAddingNewCardActive, setIsAddingNewCardActive] = useState(false);
  const [isEditingCardActive, setIsEditingCardActive] = useState(false);
  const [dateForEditionCard, setDateForEditionCard] = useState('');
  const words = useSelector((state) => state.deckControl.basicWords);
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.ui.notification);

  const openNewCardModalHandler = () => {
    setIsAddingNewCardActive(true);
  };

  const getDateForEditionModal = (cardValue) => {
    setDateForEditionCard(cardValue);
  };

  useEffect(() => {
    const sendCardsData = async () => {
      dispatch(
        showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Sending cards data!',
        })
      );
      const response = await fetch(
        'https://rememberme-e57ba-default-rtdb.europe-west1.firebasedatabase.app/Card.json',
        {
          method: 'PUT',
          body: JSON.stringify(words),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cards data failed.');
      }

      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cards data successfully!',
        })
      );
    };

    if (isInitial) {
      isInitial = false;
      return;
    }

    sendCardsData().catch((error) => {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    });
  }, [words, dispatch]);

  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}

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
        <NewCardForm isShowModal={setIsAddingNewCardActive} />
      </Modal>
      <Modal active={isEditingCardActive} setActive={setIsEditingCardActive}>
        {isEditingCardActive && (
          <EditCardForm
            russian={dateForEditionCard.russian}
            english={dateForEditionCard.english}
            id={dateForEditionCard.id}
            isShowModal={setIsEditingCardActive}
          />
        )}
      </Modal>
    </Fragment>
  );
};

export default EditingDeck;
