import { configureStore } from '@reduxjs/toolkit';
import newWordReducer from './newWordSlice';

export const storeWords = configureStore({
  reducer: {
    add: newWordReducer,
  },
});
