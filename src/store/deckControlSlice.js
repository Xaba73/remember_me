import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicWords: [],
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

    addStartCardsFromServer: (state, action) => {
      action.payload.map((item) => state.basicWords.push(item));
    },
  },
});

export const { newWord, editWord, deleteCard, addStartCardsFromServer } =
  deckControlSlice.actions;

export default deckControlSlice.reducer;
