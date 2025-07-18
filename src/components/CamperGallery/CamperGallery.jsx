import React from "react";
import css from "./CamperGallery.module.css";

const CamperGallery = ({ images }) => {
  const imagesToShow = images.slice(0, 8);
  //   console.log(images);

  return (
    <div className={css.gallery}>
      {imagesToShow.map((src, index) => (
        <div key={index} className={css.imageWrapper}>
          <img
            src={src}
            alt={`Camper photo ${index + 1}`}
            className={css.image}
          />
        </div>
      ))}
    </div>
  );
};

export default CamperGallery;
