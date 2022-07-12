import { configureStore } from '@reduxjs/toolkit';
import recipeSlice from '../recipe/redux/RecipeSlice';
import recommendedSlice from '../recommended/redux/RecommendedSlice';

const store = configureStore({
  reducer: {
    recipe: recipeSlice,
    recommended: recommendedSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;