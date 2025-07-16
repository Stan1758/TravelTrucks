import React from "react";
import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";

const CamperCard = ({ camper }) => {
  const { id, name, location, price, rating, gallery } = camper;

  return (
    <div className={css.card}>
      <img src={gallery?.[0]} alt={name} className={css.image} />
      <div className={css.info}>
        <h2 className={css.name}>{name}</h2>
        <p>Location: {location}</p>
        <p>Price: {price.toFixed(2)}</p>
        <p>Rating: {rating}</p>
        <Link to={`/catalog/${id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
