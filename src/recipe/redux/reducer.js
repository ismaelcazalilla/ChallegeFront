import { createSlice } from '@reduxjs/toolkit'

export const recipesSlice = createSlice({
  name: 'recipes',
  initialState: {
    value: [],
  },
  reducers: {
    getAll: (state, action) => {
      state.value = action.payload
    }
  },
});

export const { getAll } = recipesSlice.actions;

export default recipesSlice.reducer;
