import React, { useState, useRef, useEffect } from "react";
import { selectUniqueCities } from "../../../features/campers/selectors";
import { useSelector } from "react-redux";

import css from "./Location.module.css";
import locationIcon from "../../../assets/location.svg";

const Location = ({ value, onChange }) => {
  const cities = useSelector(selectUniqueCities);
  // value - повна локація типу "Ukraine, Lviv"
  const selectedCity = value ? value.split(", ")[1] : "";
  console.log(value);

  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSelect = (city) => {
    if (city === "All cities") {
      onChange("");
    } else {
      onChange(`Ukraine, ${city}`);
    }
    setIsOpen(false);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <label className={css.label}>Location</label>
      <button className={css.toggleBtn} onClick={() => setIsOpen(!isOpen)}>
        <span className={css.iconText}>
          <img src={locationIcon} alt="Location" className={css.icon} />
          {selectedCity || "All cities"}
        </span>
      </button>

      {isOpen && (
        <ul className={css.list}>
          <li
            onClick={() => handleSelect("All cities")}
            className={!selectedCity ? css.active : ""}
          >
            All cities
          </li>
          {cities.map((city) => (
            <li
              key={city}
              onClick={() => handleSelect(city)}
              className={city === selectedCity ? css.active : ""}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Location;
