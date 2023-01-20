import { configureStore } from '@reduxjs/toolkit';
import deckControlReducer from './deckControlSlice';

export const storeWords = configureStore({
  reducer: {
    deckControl: deckControlReducer,
  },
});
