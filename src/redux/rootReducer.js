// src/redux/rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import campersReducer from "../features/campers/campersSlice";
import filtersReducer from "../features/filters/filtersSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const favoritesPersistConfig = {
  key: "favorites",
  storage,
};

const rootReducer = combineReducers({
  campers: campersReducer,
  filters: filtersReducer,
  favorites: persistReducer(favoritesPersistConfig, favoritesReducer),
});

export default rootReducer;
