import { useSelector } from "react-redux";
import { selectReviews } from "../../redux/selectors";
import sprite from "../../assets/sprite.svg";
import css from "./Reviews.module.css";

const stars = [1, 2, 3, 4, 5];
const Reviews = () => {
  const reviews = useSelector(selectReviews);

  return (
    <ul className={css.reviewList}>
      {reviews.map((review, i) => {
        return (
          <li key={i}>
            <div className={css.header}>
              <div className={css.logoWrapper}>{review.reviewer_name[0]}</div>
              <div className={css.titleWrapper}>
                <p className={css.reviewerName}>{review.reviewer_name}</p>
                <ul className={css.ratingList}>
                  {stars.map((i) => {
                    return (
                      <li key={i}>
                        <svg
                          key={i}
                          className={
                            review.reviewer_rating > i - 1
                              ? css.ratingPositive
                              : css.ratingNetural
                          }
                        >
                          <use href={`${sprite}#icon-rating`} />
                        </svg>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <p className={css.textReview}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};
export default Reviews;