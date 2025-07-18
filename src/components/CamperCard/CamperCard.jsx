import React from "react";
import { Link } from "react-router-dom";
import css from "./CamperCard.module.css";
import CamperFeatures from "../CamperFeatures/CamperFeatures";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import heartIcon from "../../assets/heart.svg";
import ratingIcon from "../../assets/rating.svg";
import locationIcon from "../../assets/location.svg";

const CamperCard = ({ camper, onToggleFavorite, isFavorite }) => {
  const { id, name, description, location, price, rating, gallery, reviews } =
    camper;

  const handleFavoriteClick = () => {
    if (onToggleFavorite) {
      onToggleFavorite(id);
    }
  };
  const getShortDescription = (text, maxLength = 67) => {
    if (text.length <= maxLength) return text;

    const words = text.split(" ");
    let result = "";

    for (let word of words) {
      if ((result + word).length > maxLength) break;
      if (word.length > 1) {
        result += (result ? " " : "") + word;
      }
    }

    // Прибрати кому, якщо вона останній символ
    result = result.trim().replace(/,$/, "");

    return result + "...";
  };

  return (
    <div className={css.card}>
      <img
        src={gallery?.[0]?.original || ""}
        alt={name}
        className={css.image}
      />
      <div className={css.info}>
        <div className={css.title}>
          <h2 className={css.name}>{name}</h2>
          <div className={css.priceFavoriteWrapper}>
            <p>€{Math.floor(price)}</p>
            <FavoriteButton camperId={id} />
          </div>
        </div>
        <div className={css.reviewsLocation}>
          <p className={css.iconText}>
            <img src={ratingIcon} alt="Rating" className={css.icon} />
            {rating} ({reviews?.length || 0} Reviews)
          </p>
          <p className={css.iconText}>
            <img src={locationIcon} alt="Location" className={css.icon} />
            {location}
          </p>
        </div>
        <p className={css.description}>{getShortDescription(description)}</p>
        <CamperFeatures camper={camper} />
        <Link to={`/catalog/${id}`} className={css.showMoreBtn}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
