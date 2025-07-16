// src/features/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  type: "", // тип кузова
  amenities: [], // AC, kitchen, bathroom тощо
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setType(state, action) {
      state.type = action.payload;
    },
    toggleAmenity(state, action) {
      const amenity = action.payload;
      if (state.amenities.includes(amenity)) {
        state.amenities = state.amenities.filter((a) => a !== amenity);
      } else {
        state.amenities.push(amenity);
      }
    },
    resetFilters() {
      return initialState;
    },
  },
});

export const { setLocation, setType, toggleAmenity, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
