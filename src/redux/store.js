// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import rootReducer from "./rootReducer";

// Загальна конфігурація persist (використовується, але не обгортає reducers вручну)
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"], // ця опція дозволяє зберігати тільки favorites
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // ✅ правильна обгортка

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // ❗️щоб не було попереджень через redux-persist
    }),
});

export const persistor = persistStore(store);
