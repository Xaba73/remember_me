import { showNotification } from './uiSlice';
import { startFetching } from './deckControlSlice';

export const fetchDeckData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const reponse = await fetch(
        'https://rememberme-e57ba-default-rtdb.europe-west1.firebasedatabase.app/Cards/initialDeck.json'
      );
      if (!reponse.ok) {
        throw new Error('Fetching Deck Date failed');
      }

      const data = await reponse.json();
      return data;
    };

    try {
      const initialDeckData = await fetchData();
      dispatch(startFetching(initialDeckData));
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};

export const sendDeckData = (deckData) => {
  return async (dispatch) => {
    dispatch(
      showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cards data!',
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        'https://rememberme-e57ba-default-rtdb.europe-west1.firebasedatabase.app/Cards/initialDeck.json',
        {
          method: 'PUT',
          body: JSON.stringify(deckData),
        }
      );
      if (!response.ok) {
        throw new Error('Sending cards data failed.');
      }
    };

    try {
      await sendRequest();
      dispatch(
        showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cards data successfully!',
        })
      );
    } catch (error) {
      dispatch(
        showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      );
    }
  };
};
