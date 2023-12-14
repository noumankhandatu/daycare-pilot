// listSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { title, description, date } = action.payload;
      state.items.push({
        title,
        description,
        date,
      });
    },
    removeItem: (state, action) => {
      const indexToRemove = state.items.findIndex(item => item.date === action.payload.date);
      if (indexToRemove !== -1) {
        state.items.splice(indexToRemove, 1);
      }
    },
  },
});

export const { addItem, removeItem } = listSlice.actions;

export default listSlice.reducer;
