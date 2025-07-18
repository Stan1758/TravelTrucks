import React from "react";
import css from "./CamperSpecs.module.css"; // Створи або заміни стилі

const specsList = [
  { key: "form", label: "Form" },
  { key: "length", label: "Length" },
  { key: "width", label: "Width" },
  { key: "height", label: "Height" },
  { key: "tank", label: "Tank" },
  { key: "consumption", label: "Consumption" },
];

const CamperSpecs = ({ camper }) => {
  return (
    <ul className={css.specsList}>
      {specsList.map(({ key, label }) => {
        let value = camper[key];
        if (!value) return null;
        if (typeof value === "string") {
          // Капіталізація, якщо починається з малої літери
          if (/^[a-z]/.test(value)) {
            value = value.charAt(0).toUpperCase() + value.slice(1);
          }

          // Додаємо пробіл між цифрою і буквою (наприклад: "100L" → "100 L")
          value = value.replace(/(\d)([a-zA-Z])/g, "$1 $2");
          // Також між буквою і цифрою (наприклад: "km100" → "km 100") — за потреби:
          value = value.replace(/([a-zA-Z])(\d)/g, "$1 $2");
          value = value.replace(/([^ ])\/+/g, "$1 /");
        }

        return (
          <li key={key} className={css.specItem}>
            <span className={css.label}>{label}:</span>{" "}
            <span className={css.value}>{value}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default CamperSpecs;
