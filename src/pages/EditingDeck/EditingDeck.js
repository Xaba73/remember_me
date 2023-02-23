import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sendDeckData } from '../../store/deck-actions';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';
import Modal from '../../components/Modal/Modal';
import EditCardForm from '../../components/EditCardForm/EditCardForm';
import Header from '../../components/Header/Header';
import Notification from '../../components/UI/Notification';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { IconButton } from '@mui/material';
import styles from './EditingDeck.module.css';

let isInitial = true;
const EditingDeck = () => {
  const [isAddingNewCardActive, setIsAddingNewCardActive] = useState(false);
  const [isEditingCardActive, setIsEditingCardActive] = useState(false);
  const [dateForEditionCard, setDateForEditionCard] = useState('');
  const [isShowNotification, setIsShowNotification] = useState(false);
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
    setTimeout(() => {
      setIsShowNotification(false);
    }, 3000);
  }, [notification]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    dispatch(sendDeckData(words));
    setIsShowNotification(true);
  }, [words, dispatch]);

  return (
    <div className={styles.decoration__wrapper}>
      {isShowNotification && notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Header
        link='/words'
        linkDescription='Карточки'
        showAddNewCardButton={true}
        openModalAddNewCard={openNewCardModalHandler}
      />
      <CardWordItems
        onIsEditingCardActive={setIsEditingCardActive}
        onGetDateForEditionModal={getDateForEditionModal}
        openModalAddNewCard={openNewCardModalHandler}
      />
      <IconButton
        color='black'
        aria-label='add new card'
        onClick={openNewCardModalHandler}
      >
        <AddBoxIcon />
      </IconButton>
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
    </div>
  );
};

export default EditingDeck;
