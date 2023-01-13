import { createSlice } from '@reduxjs/toolkit';

const DUMMY_WORD = [
  { russian: 'лошадь', english: 'horse' },
  { russian: 'машина', english: 'car' },
  { russian: 'красный', english: 'red' },
  { russian: 'медведь', english: 'bear' },
  { russian: 'Явно', english: 'explicitly' },
  { russian: 'Оказывается', english: 'it turns out' },
  { russian: 'уязвимый', english: 'vulnerable' },
  { russian: 'Хотя, однако', english: 'though' },
  { russian: 'Довольно, вполне', english: 'quite' },
];

const initialState = {
  basicWords: DUMMY_WORD,
};

export const newWordSlice = createSlice({
  name: 'add',
  initialState,
  reducers: {
    newWord: (state) => state,
  },
});

export const { newWord } = newWordSlice.actions;

export default newWordSlice.reducer;
