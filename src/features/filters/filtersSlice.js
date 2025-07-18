// src/features/filters/filtersSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  form: "", // тип кузова
  amenities: [], // AC, kitchen, bathroom тощо
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation(state, action) {
      state.location = action.payload;
    },
    setForm(state, action) {
      state.form = action.payload;
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

export const { setLocation, setForm, toggleAmenity, resetFilters } =
  filtersSlice.actions;
export default filtersSlice.reducer;
