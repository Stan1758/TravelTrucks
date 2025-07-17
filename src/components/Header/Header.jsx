import React from "react";
import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
import logoUrl from "../../assets/logo.svg";

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <div className={css.logo}>
          <NavLink to="/">
            <img
              src={logoUrl}
              alt="TravelTrucks logo"
              className={css.logoIcon}
            />
          </NavLink>
        </div>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
