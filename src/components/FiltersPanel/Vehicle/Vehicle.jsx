import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setForm, toggleAmenity } from "../../../features/filters/filtersSlice";
import css from "./Vehicle.module.css";

// Іконки
import acIcon from "../../../assets/icons/ac.svg";
import transmissionIcon from "../../../assets/icons/transmission.svg";
import kitchenIcon from "../../../assets/icons/kitchen.svg";
import radioIcon from "../../../assets/icons/radio.svg";
import bathroomIcon from "../../../assets/icons/bathroom.svg";
import vanIcon from "../../../assets/icons/van.svg";
import fullyIcon from "../../../assets/icons/fully-integrated.svg";
import alcoveIcon from "../../../assets/icons/alcove.svg";

// Вибрані фічі для фільтрації
const vehicleFeatures = [
  { key: "AC", label: "AC", icon: acIcon },
  { key: "automatic", label: "Automatic", icon: transmissionIcon },
  { key: "kitchen", label: "Kitchen", icon: kitchenIcon },
  { key: "radio", label: "TV", icon: radioIcon },
  { key: "bathroom", label: "Bathroom", icon: bathroomIcon },
];

// Типи кузова
const vehicleTypes = [
  { key: "panelTruck", value: "van", label: "Van", icon: vanIcon },
  {
    key: "fullyIntegrated",
    value: "fullyIntegrated",
    label: "Fully Integrated",
    icon: fullyIcon,
  },
  { key: "alcove", value: "alcove", label: "Alcove", icon: alcoveIcon },
];

const Vehicle = () => {
  const dispatch = useDispatch();
  const selectedAmenities = useSelector((state) => state.filters.amenities);
  const selectedType = useSelector((state) => state.filters.form);

  const handleToggle = (key) => {
    dispatch(toggleAmenity(key));
  };

  const handleSelect = (type) => {
    dispatch(setForm(type));
  };

  return (
    <div className={css.wrapper}>
      <h3 className={css.title}>Filters</h3>

      <h3 className={css.titleCategory}>Vehicle equipment</h3>
      <div className={css.divider} />
      <div className={css.iconGrid}>
        {vehicleFeatures.map(({ key, label, icon }) => (
          <button
            key={key}
            onClick={() => handleToggle(key)}
            className={`${css.iconBtn} ${
              selectedAmenities.includes(key) ? css.active : ""
            }`}
          >
            <img src={icon} alt={label} className={css.icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      <h3 className={css.titleCategory}>Vehicle type</h3>
      <div className={css.divider} />

      {/* Другий контейнер */}
      <div className={css.iconGrid}>
        {vehicleTypes.map(({ key, value, label, icon }) => (
          <button
            key={key}
            onClick={() => handleSelect(value)}
            className={`${css.iconBtn} ${
              selectedType === value ? css.active : ""
            }`}
          >
            <img src={icon} alt={label} className={css.icon} />
            <span>{label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Vehicle;
