import { NavLink } from "react-router-dom";
import { useId } from "react";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import css from "./Navigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Navigation = () => (
  <header>
    <nav className={css.navigation}>
      <NavLink to="/" className={css.logo}>
        <svg className={css.logo}>
          <use href={`${sprite}#icon-logo`} />
        </svg>
      </NavLink>
      <ul className={css.wrapper}>
        <li key={useId()}>
          <NavLink to="/" className={buildLinkClass}>
            Home
          </NavLink>
        </li>
        <li key={useId()}>
          <NavLink to="/catalog" className={buildLinkClass}>
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;