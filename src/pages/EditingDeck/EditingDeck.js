import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewCardForm from '../../components/NewCardForm/NewCardForm';
import CardWordItems from '../../components/CardWordItems/CardWordItems';
import Modal from '../../components/Modal/Modal';
import EditCardForm from '../../components/EditCardForm/EditCardForm';
import Notification from '../../components/UI/Notification';
import { IconButton } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { sendDeckData } from '../../store/deck-actions';
import styles from './EditingDeck.module.css';
import Header from '../../components/Header/Header';

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
      <Header link='/words' linkDescription='Карточки' />
      <CardWordItems
        onIsEditingCardActive={setIsEditingCardActive}
        onGetDateForEditionModal={getDateForEditionModal}
      />
      <div className={styles.button__wrapper}>
        <IconButton
          color='black'
          aria-label='add new card'
          onClick={openNewCardModalHandler}
        >
          <AddBoxIcon />
        </IconButton>
      </div>
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
