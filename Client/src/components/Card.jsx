/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { addFav, removeFav } from "../redux/actions";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
export function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  const [isFav, setIsFav] = useState(false);

  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const onClick = () => {
    onClose(id);
  };

  const handleFavorite = () => {
    if (isFav) {
      dispatch(removeFav(id));
      setIsFav(false);
    } else {
      setIsFav(true);
      dispatch(
        addFav({
          id,
          name,
          status,
          species,
          gender,
          origin,
          image,
        })
      );
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);
  return (
    <div className={styles.container}>
      {isFav ? (
        <button onClick={handleFavorite} style={{ backgroundColor: "#fff" }}>
          ❤️
        </button>
      ) : (
        <button onClick={handleFavorite} style={{ backgroundColor: "#fff" }}>
          🤍
        </button>
      )}
      <button onClick={onClick} style={{ color: "white" }}>
        X
      </button>
      <img src={image} alt="irick" />
      <Link to={`/detail/${id}`}>
        <h2 className={styles.name}>{name}</h2>
      </Link>
      <div className={styles.container_sub}>
        <div className={styles.container_skills}>
          <h2>Status:</h2>
          <span>{status}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Specie:</h2>
          <span>{species}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Gender:</h2>
          <span>{gender}</span>
        </div>
        <div className={styles.container_skills}>
          <h2>Origin:</h2>
          <span>{origin}</span>
        </div>
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addFav: (personaje) => dispatch(addFav(personaje)),
//     removeFav: (id) => dispatch(removeFav(id)),
//   };
// };

// const mapStateToProps = (state) => ({
//   myFavorites: state.myFavorites,
// });

export default Card;
