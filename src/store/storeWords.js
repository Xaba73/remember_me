import { configureStore } from '@reduxjs/toolkit';
import deckControlReducer from './deckControlSlice';
import uiSliceReducer from './uiSlice';

export const storeWords = configureStore({
  reducer: {
    deckControl: deckControlReducer,
    ui: uiSliceReducer,
  },
});
