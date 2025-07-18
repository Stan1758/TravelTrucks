import React from "react";
import css from "./CamperFeatures.module.css";
import { getCamperFeaturesWithIcons } from "../../utils"; // Імпорт з утиліт

const CamperFeatures = ({ camper }) => {
  const features = getCamperFeaturesWithIcons(camper); // Отримуємо масив з icon + displayLabel

  return (
    <div className={css.features}>
      {features.map(({ key, icon, displayLabel }) => (
        <div key={key} className={css.feature}>
          <img src={icon} alt={displayLabel} className={css.featureIcon} />
          <span>{displayLabel}</span>
        </div>
      ))}
    </div>
  );
};

export default CamperFeatures;
