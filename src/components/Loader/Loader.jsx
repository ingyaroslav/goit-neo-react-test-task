import { TailSpin } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = ({ loader }) => {
  return (
    <div className={css.loaderWrapper}>
      <TailSpin
        height="80"
        width="80"
        color="#e44848"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={loader}
        clas
        sName={css.Loader}
        strokeWidth="5"      
      />
    </div>
  );
};

export default Loader;