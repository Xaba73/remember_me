import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const DUMMY_WORD = [
  { russian: 'лошадь', english: 'horse', key: uuidv4() },
  { russian: 'машина', english: 'car', key: uuidv4() },
  { russian: 'красный', english: 'red', key: uuidv4() },
  { russian: 'медведь', english: 'bear', key: uuidv4() },
  { russian: 'Явно', english: 'explicitly', key: uuidv4() },
  { russian: 'Оказывается', english: 'it turns out', key: uuidv4() },
  { russian: 'уязвимый', english: 'vulnerable', key: uuidv4() },
  { russian: 'Хотя, однако', english: 'though', key: uuidv4() },
  { russian: 'Довольно, вполне', english: 'quite', key: uuidv4() },
];

const initialState = {
  basicWords: DUMMY_WORD,
};

export const newWordSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    newWord: (state, newCard) => {
      state.basicWords = [...state.basicWords, newCard.payload];
    },
  },
});

export const { newWord } = newWordSlice.actions;

export default newWordSlice.reducer;
