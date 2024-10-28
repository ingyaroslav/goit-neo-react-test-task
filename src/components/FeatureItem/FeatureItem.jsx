import sprite from "../../assets/sprite.svg";
import css from "./FeatureItem.module.css";

const Feature = ({ name }) => {
  return (
    <div className={css.feature}>
      <svg className={css.icon}>
        <use href={`${sprite}#icon-${name.toLowerCase()}`} />
      </svg>
      <p className={css.text}>{name.charAt(0).toUpperCase() + name.slice(1)}</p>
    </div>
  );
};

export default Feature;