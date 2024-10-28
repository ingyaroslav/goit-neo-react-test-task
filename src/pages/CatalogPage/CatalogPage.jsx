import { useEffect } from "react";
import { fetchCampers } from "../../redux/campersOps";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { setPage } from "../../redux/campersSlice";
import {
  selectCampers,
  selectError,
  selectIsLoading, 
  selectLoadMore,
  selectCurrentPage,
  selectPreviousPage
} from "../../redux/selectors";
import Loader from "../../components/Loader/Loader";
import CatalogItem from "../../components/CatalogItem/CatalogItem";
import Filters from "../../components/Filters/Filters";
import clsx from "clsx";
import css from "./CatalogPage.module.css";

const CatalogPage = () => { 
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const camperList = useSelector(selectCampers); 
  const loadMore = useSelector(selectLoadMore);
  const currentPage = useSelector(selectCurrentPage);
  const previousPage = useSelector(selectPreviousPage);
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {          
    if (currentPage !== previousPage) {
      dispatch(fetchCampers(currentPage));
    }    
    }, [dispatch,currentPage, previousPage,location]);

  const handleLoadMore = () => {     
      dispatch(setPage());    
  };

  return (
    <main>
      <section className={css.catalogPage}>
        <div className={css.container}>
          <div className={css.filterList}>
            <Filters />
          </div>
          {camperList.length === 0 && isLoading && <Loader />}
          {error && <p className={css.error}>Seems we couldn&apos;t find any matches. Please try to change your search parameters</p>}
          <ul className={css.camperList}>
            {camperList.map((camper) => (
              <li key={camper.id} className={css.camperItem}>
                <CatalogItem
                  camper={camper}
                  features={Object.keys(camper).filter(
                    (key) => camper[key] === true
                  )}
                />
              </li>
            ))}
          </ul>
        </div>
      </section> 
      {!isLoading && loadMore && !error && (    
        <section className={css.loadMore}>
          <div className={clsx(css.container, css.loadMoreContainer)}>
            <button className={css.loadMoreBtn} onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        </section>)}
        {isLoading && <Loader />}      
    </main>
  );
};

export default CatalogPage;