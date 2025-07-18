// src/features/favorites/favoritesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const persistedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const initialState = {
  items: persistedFavorites, // id кемперів
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const id = action.payload;
      if (state.items.includes(id)) {
        state.items = state.items.filter((item) => item !== id);
      } else {
        state.items.push(id);
      }
      localStorage.setItem("favorites", JSON.stringify(state.items)); // 🧠 зберігаємо
    },
    clearFavorites(state) {
      state.items = [];
      localStorage.removeItem("favorites");
    },
  },
});

export const { toggleFavorite, clearFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
