import { useEffect } from "react";
import { reset } from "../../redux/campersSlice";
import { useDispatch } from "react-redux";
import Button from "../../components/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(reset());
  }, [dispatch]);

  return (
    <main>
      <section className={css.hero}>
        <div className={css.container}>
          <h1 className={css.header}>Campers of your dreams</h1>
          <p className={css.text}>
            You can find everything you want in our catalog
          </p>
          <Button to="/catalog" text="View Now" padd="home" />
        </div>
      </section>
    </main>
  );
};

export default HomePage;