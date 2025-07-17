import React from "react";
import { Link } from "react-router-dom";
import css from "./Home.module.css";
import bg from "../../assets/home-bg.png";

export default function Home() {
  return (
    <div className={css.wrapper} style={{ backgroundImage: `url(${bg})` }}>
      <div className={css.contentBox}>
        <h1 className={css.title}>Campers of your dreams</h1>
        <p className={css.text}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={css.ctaButton}>
          View Now
        </Link>
      </div>
    </div>
  );
}
