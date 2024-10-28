import { useSelector } from "react-redux";
import { selectFeatures, selectSpecifications } from "../../redux/selectors";
import FeatureList from "../FeaturesList/FeaturesList";
import css from "./Features.module.css";

const Features = () => {
  const features = useSelector(selectFeatures);
  const specifications = useSelector(selectSpecifications);

  return (
    <div className={css.wrapper}>
      <FeatureList features={features} camperPage={true} />
      <p className={css.title}>Vehicle details</p>
      <ul className={css.specifications}>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Form</span>
          <span className={css.specificationValue}>{specifications.form}</span>
        </li>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Length</span>
          <span className={css.specificationValue}>
            {specifications.length}
          </span>
        </li>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Width</span>
          <span className={css.specificationValue}>{specifications.width}</span>
        </li>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Height</span>
          <span className={css.specificationValue}>
            {specifications.height}
          </span>
        </li>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Tank</span>
          <span className={css.specificationValue}>{specifications.tank}</span>
        </li>
        <li className={css.specificationItem}>
          <span className={css.specificationLabel}>Consumption</span>
          <span className={css.specificationValue}>
            {specifications.consumption}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Features;