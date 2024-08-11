import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  notes: [],
};

export const noteSlice = createSlice({
  name: 'notepad',
  initialState,
  reducers: {
    setNote: (state, action) => {
      state.notes = [action.payload, ...state.notes];
    },
    deleteNote: (state, action) => {
      state.notes = state.notes.filter(note => note.id !== action.payload);
    },
    updateNote: (state, action) => {
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return {...note, ...action.payload.data};
        } else {
          return note;
        }
      });
    },
  },
});

export const {setNote, deleteNote, updateNote} = noteSlice.actions;
export default noteSlice.reducer;
