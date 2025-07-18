// src/components/FiltersPanel/FiltersPanel.jsx
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setLocation, setForm } from "../../features/filters/filtersSlice";
import { fetchCampers } from "../../features/campers/campersSlice";
import Location from "./Location/Location";
import Vehicle from "./Vehicle/Vehicle";
import css from "./FiltersPanel.module.css";

const FiltersPanel = ({ resetVisibleCount }) => {
  const dispatch = useDispatch();

  const [localFilters, setLocalFilters] = useState({
    location: "",
    form: "",
  });

  const handleLocationChange = (city) => {
    setLocalFilters((prev) => ({ ...prev, location: city }));
  };

  const handleFormChange = (form) => {
    setLocalFilters((prev) => ({ ...prev, form }));
  };

  const handleSearch = () => {
    dispatch(setLocation(localFilters.location));
    dispatch(setForm(localFilters.form));
    dispatch(fetchCampers(localFilters)); // ✅ завантажити кемпери з фільтрами
    if (resetVisibleCount) {
      resetVisibleCount(); // ✅ скинути пагінацію
    }
  };

  return (
    <div className={css.filtersPanel}>
      <Location value={localFilters.location} onChange={handleLocationChange} />
      <Vehicle value={localFilters.form} onChange={handleFormChange} />
      <button className={css.searchBtn} onClick={handleSearch}>
        Search
      </button>
    </div>
  );
};

export default FiltersPanel;
