// src/redux/rootReducer.js
import { combineReducers } from "redux";
import campersReducer from "../features/campers/campersSlice";
import filtersReducer from "../features/filters/filtersSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

// persist config для обраного
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
