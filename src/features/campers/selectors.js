import { createSelector } from "@reduxjs/toolkit";

// Базовий селектор для списку кемперів
export const selectCampers = (state) => state.campers.items;
export const selectAllCampers = (state) => state.campers.allItems;

// Унікальні міста з location, типу "Ukraine, Lviv"
export const selectUniqueCities = createSelector(
  [selectAllCampers],
  (campers) => {
    if (!Array.isArray(campers)) return [];
    const cities = campers.map((camper) => camper.location.split(", ")[1]);
    return [...new Set(cities)].sort();
  }
);
