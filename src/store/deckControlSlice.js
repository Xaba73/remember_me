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
    //Redux requires that we write all state updates immutably, by making copies of data and updating the copies.
    //However, Redux Toolkit's createSlice and createReducer APIs use Immer inside to allow us to write "mutating" update logic that becomes correct immutable updates.

    newWord: (state, action) => {
      state.basicWords = [...state.basicWords, action.payload];
    },

    editWord: (state, action) => {
      let cardIndex = state.basicWords.findIndex(
        (item) => item.key === action.payload.id
      );
      state.basicWords[cardIndex].russian = action.payload.russian;
      state.basicWords[cardIndex].english = action.payload.english;
    },

    deleteCard: (state, action) => {
      let cardIndex = state.basicWords.findIndex(
        (item) => item.key === action.payload.id
      );
      console.log(cardIndex);
      state.basicWords.splice(cardIndex, 1);
    },

    startFetching: (state, action) => {
      console.log(current(state));
      action.payload.map((item) => state.basicWords.push(item));
    },
  },
});

export const { newWord, editWord, deleteCard, startFetching } =
  deckControlSlice.actions;

export default deckControlSlice.reducer;
