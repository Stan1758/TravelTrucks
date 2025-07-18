import React from "react";
import css from "./CamperFeatures.module.css";

// Імпорт іконок (онови шляхи, якщо треба)
import transmissionIcon from "../../assets/icons/transmission.svg";
import acIcon from "../../assets/icons/ac.svg";
import engineIcon from "../../assets/icons/engine.svg";
import kitchenIcon from "../../assets/icons/kitchen.svg";
import radioIcon from "../../assets/icons/radio.svg";
import bathroomIcon from "../../assets/icons/bathroom.svg";
import fridgeIcon from "../../assets/icons/fridge.svg";
import microwaveIcon from "../../assets/icons/microwave.svg";
import gasIcon from "../../assets/icons/gas.svg";
import waterIcon from "../../assets/icons/water.svg";

const featuresList = [
  { key: "transmission", icon: transmissionIcon },
  { key: "AC", label: "AC", icon: acIcon },
  { key: "engine", icon: engineIcon },
  { key: "kitchen", label: "Kitchen", icon: kitchenIcon },
  { key: "radio", label: "Radio", icon: radioIcon },
  { key: "bathroom", label: "Bathroom", icon: bathroomIcon },
  { key: "refrigerator", label: "Refrigerator", icon: fridgeIcon },
  { key: "microwave", label: "Microwave", icon: microwaveIcon },
  { key: "gas", label: "Gas", icon: gasIcon },
  { key: "water", label: "Water", icon: waterIcon },
];

const capitalize = (str) =>
  typeof str === "string" ? str.charAt(0).toUpperCase() + str.slice(1) : "";

const CamperFeatures = ({ camper }) => {
  return (
    <div className={css.features}>
      {featuresList.map(({ key, label, icon }) => {
        const value = camper[key];

        if (!value) return null;

        const displayLabel =
          label ||
          (key === "engine" || key === "transmission"
            ? capitalize(value)
            : null);

        return (
          <div key={key} className={css.feature}>
            <img src={icon} alt={displayLabel} className={css.featureIcon} />
            <span>{displayLabel}</span>
          </div>
        );
      })}
    </div>
  );
};

export default CamperFeatures;
