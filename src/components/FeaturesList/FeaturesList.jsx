import Feature from "../FeatureItem/FeatureItem";
import clsx from "clsx";
import css from "./FeaturesList.module.css";

const FeatureList = ({ features, camperPage = false }) => {
  const buildClassName = clsx(css.featureList, camperPage && css.camperPage);

  return (
    <ul className={buildClassName}>
      {features.map((feature) => (
        <li key={feature}>
          <Feature name={feature} />
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;