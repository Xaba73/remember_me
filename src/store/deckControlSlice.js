import { createSlice, current } from '@reduxjs/toolkit';
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

export const deckControlSlice = createSlice({
  name: 'deckControl',
  initialState,
  reducers: {
    newWord: (state, newCard) => {
      //Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
      //However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.
      state.basicWords = [...state.basicWords, newCard.payload];
    },
    editWord: (state, cardId, newCardValie) => {
      let cardIndex = state.basicWords.findIndex((item) => item.key === cardId);
      console.log(cardIndex);
      state.basicWords[cardIndex].russian = newCardValie;
      console.log(current(state));
    },
  },
});

export const { newWord, editWord } = deckControlSlice.actions;

export default deckControlSlice.reducer;
