import css from "./CamperInfo.module.css";
import ratingIcon from "../../assets/rating.svg";
import locationIcon from "../../assets/location.svg";
import Container from "../Container/Container";
import CamperGallery from "../CamperGallery/CamperGallery";

const CamperInfo = ({ camper }) => {
  const { name, location, price, rating, description, reviews } = camper;
  const imagesUrls =
    camper.gallery
      ?.filter((img) => img && img.original)
      .map((img) => img.original) || [];
  return (
    <div className={css.info}>
      <div className={css.header}>
        <h2 className={css.name}>{name}</h2>
        <div className={css.meta}>
          <p className={css.iconText}>
            <img src={ratingIcon} alt="Rating" className={css.icon} />
            {rating} ({reviews.length} reviews)
          </p>
          <p className={css.iconText}>
            <img src={locationIcon} alt="Location" className={css.icon} />
            {location}
          </p>
        </div>
        <div className={css.price}>€{price.toFixed()}</div>
        <CamperGallery images={imagesUrls} />
        <p className={css.description}>{description}</p>
      </div>
    </div>
  );
};

export default CamperInfo;
