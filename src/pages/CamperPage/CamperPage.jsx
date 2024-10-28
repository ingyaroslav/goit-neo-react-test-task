import { useEffect, Suspense } from "react";
import { Outlet, useParams, NavLink, Link } from "react-router-dom";
import { fetchCamper } from "../../redux/campersOps";
import { useDispatch, useSelector } from "react-redux";
import { selectCamper } from "../../redux/selectors";
import BookForm from "../../components/BookForm/BookForm";
import Loader from "../../components/Loader/Loader";
import sprite from "../../assets/sprite.svg";
import clsx from "clsx";
import css from "./CamperPage.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const CamperPage = () => {
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  if (!camper) {
    return;
  }

  return (
    <main>
      <section className={css.camperTitle}>
        <div className={css.container}>
          <div className={css.header}>
            <p className={css.title}>{camper.name}</p>
          </div>
          <div className={css.wrapper}>
            <Link
              to="reviews"
              className={clsx(css.contentWrapper, css.linkReviews)}
            >
              <svg className={css.ratingIcon}>
                <use href={`${sprite}#icon-rating`} />
              </svg>
              <p
                className={css.reviews}
              >{`${camper.rating}(${camper.reviews.length} Reviews)`}</p>
            </Link>
            <div className={css.contentWrapper}>
              <svg className={css.locationIcon}>
                <use href={`${sprite}#icon-location`} />
              </svg>
              <p>{camper.location}</p>
            </div>
          </div>
          <div className={css.amountwrapper}>
            <p className={css.price}>{`€${camper.price}.00`}</p>
          </div>
        </div>
      </section>
      <section className={css.camperGallery}>
        <div className={css.container}>
          <ul className={css.galleryList}>
            {camper.gallery.map((img, i) => (
              <li key={i} className={css.imgWrapper}>
                <img
                  src={img.thumb}
                  alt={camper.name}
                  className={css.img}
                ></img>
              </li>
            ))}
          </ul>
          <p className={css.description}>{camper.description}</p>
        </div>
      </section>
      <section className={css.camperlInfo}>
        <div className={css.container}>
          <ul className={css.buttons}>
            <li>
              <NavLink to="features" className={buildLinkClass}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to="reviews" className={buildLinkClass}>
                Reviews
              </NavLink>
            </li>
          </ul>
          <div className={css.additionalInfoWrapper}>
            <Suspense fallback={<Loader />}>
              <Outlet />
              <BookForm />
            </Suspense>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CamperPage;